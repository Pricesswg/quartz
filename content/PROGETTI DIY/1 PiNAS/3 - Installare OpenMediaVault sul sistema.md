---
tags:
  - PiNAS
  - openmediavault
  - DIY
  - rete
  - samba
  - raspberry
  - linux
argomento: progetti DIY
---
## *Step 1 - Creazione dell'SSD per l'avvio del sistema*

Iniziamo creando la partizione di avvio per il nostro PiNAS. Per prima cosa dobbiamo *scaricare l'immagine ISO di installazione dal sito di OpenMediaVault*, che trovate a [questo link](https://www.openmediavault.org/download.html). 
A questo punto dobbiamo installare la nostra ISO su una microSD, in modo da poter caricare il sistema operativo per far avviare il nostro Raspberry. Il programma che io consiglio è **Raspberry Pi Imager**, che potete trovare a [questo link](https://www.raspberrypi.com/software/).


> [!faq]- Quale MicroSd scegliere?
> Per il nostro sistema non è necessario avere una MicroSD di dimensioni enormi, in quanto terremo sopra solamente i file necessari a effettuare l'avvio del sistema. Naturalmente *considerate di prenderne almeno una di classe 10 di velocità, possibilmente SDHC*. La capacità basta da 8 GB, ma se trovate allo stesso prezzo una da 32, meglio quella, tanto ormai si trovano a una cifra abbordabile (sotto i 10€).

Dopo aver scaricato il nostro programma e la iso necessaria all'installazione, dobbiamo inizializzare la microSD. Inseritela quindi nel lettore del vostro PC e avviate Raspberry Pi Imager. Vi si presenterà davanti questa schermata:

![[piimager.png|700]] 

Sarà ca compilare con i seguenti passaggi:
 - *sistema Operativo*: Inserite il collegamento all'iso di OpenMediaVault che avete scaricato dal sito.
 - *SD Card*: Inserite il percorso corretto per la vostra microSD

> [!warning] ATTENZIONE
> Una volta che avete confermato tutto, premete **SCRIVI** ma **ATTENZIONE!** *tutti i file al suo interno verranno cancellati e sovrascritti*!

Una volta che la procedura sarà completata possiamo passare alla fase successiva.

## *Step 2 - Configurazione dei parametri di rete*

Una volta che avremo completato la scrittura della microSD, inseritela nello slot dedicato sul Raspberry e collegate il cavo di alimentazione e quello di rete al nostro dispositivo. Se tutto è stato fatto in modo corretto, vedrete che le luci si accenderanno sul vostro Raspberry.
La *luce verde* indica che il dispositivo sta leggendo i file presenti, mentre quella *rossa* indica la presenza di alimentazione sulla scheda.

> [!tip] 
> Se la luce rossa è lampeggiante invece che fissa, vuol dire che il dispositivo non è alimentato in modo corretto. Vi consiglio in questo caso di utilizzare un  alimentato più potente per evitare problemi all'unità.

Se tutto è stato fatto in modo corretto, vedrete accendersi le luci della porta di rete. Se li vedrete lampeggiare, allora il vostro sistema sarà avviato e potrete iniziare la ricerca del dispositivo sulla rete.

> [!info] 
> Se il vostro sistema è previsto di un *server DHCP* (abilitato di default nei sistemi casalinghi tradizionali sul router), *il vostro sistema darà un indirizzo casuale al dispositivo ogni volta che questo si disconnetterà dalla rete*, sia per spegnimento che per mancanza di alimentazione.
> Per il nostro utilizzo, sarà necessario invece *fissare l'indirizzo di rete*, in modo che questo non possa più cambiare, permettendoci di collegare il nostro PiNAS come unità di rete nei nostri PC. 
> Per una guida approfondita sul come fare, visitare la pagina dedicata qui --> [[Bloccare gli indirizzi dei dispositivi sulla rete]] 

## *Step 3 - Accesso al sistema e configurazioni iniziali

Se avremo seguito correttamente tutti i passaggi, inserendo l'[[Indirizzi IP e differenze tra IPv4 e IPv6|indirizzo IP]] nella barra del motore di ricerca, ci si presenterà davanti la pagina di connessione ad OpenMediaVault.
![[omv.png|700]]

> [!warning] CREDENZIALI STANDARD
> Al primo avvio openmediavault è configurato con le seguenti credenziali, *suggerisco di cambiarle immediatamente appena eseguito il primo accesso*:
> **USER**: admin
> **PSW**: openmediavault

### AGGIUNGIAMO LE UNITA' DISCO

Per prima cosa, se i dischi che abbiamo connesso sono nuovi di fabbrica, *questi non saranno indicizzati*, ovvero non saranno presenti partizioni sul disco, sia che si tratti di dischi NVME che di SSD SATA. 
Per far si che questi vengano riconosciuti dal sistema è necessario assegnare una partizione a ogni unità disco connessa e creare un file system. 

> [!tip]- CHE TIPO DI FILE SYSTEM UTILIZZARE?
> - **EXT4** è la scelta più sicura e stabile per la maggior parte degli utenti: veloce, affidabile e ben supportato da OMV.
> - **Btrfs** offre funzionalità avanzate (snapshot, compressione) ma richiede maggiore attenzione nella gestione. Utile se ti servono backup automatici o rollback.
> - **XFS** è adatto per archiviazione di file di grandi dimensioni ma meno flessibile rispetto a EXT4.
> - Evita **NTFS** ed **exFAT** per dischi principali: sono adatti solo per uso temporaneo o dischi esterni condivisi con Windows.
>
>  >[!note] 
>  >Usate sempre la formattazione interna di OMV per assicurarti che il disco venga gestito correttamente.

### CREAZIONE DEL FILE SYSTEM

Una volta deciso quale file system utilizzare, per crearne uno sarà sufficiente selezionare la voce *STORAGE --> File System* nel menù a sinistra, e selezionare il pulsante **:LiCirclePlus: CREA O MONTA UN FILE SYSTEM**, e dal menù a tendina selezionare la voce desiderata. 
Dal menù che comparirà a seguire, sotto il campo *Dispositivo*, bisognerà scegliere il disco su cui vorremmo applicare la voce selezionata in precedenza, e successivamente premere il tasto **SALVA** per completare la creazione.

> [!success] UNIFICARE LO SPAZIO CONDIVISO
> Di base il sistema *non prevede la creazione di un singolo spazio autoallocato tra tutte le unità presenti sul sistema*, ma permette di creare invece diversi dischi di rete separati. Per unificare la gestione dei dischi in un unico spazio totale, basterà scaricare il plugin **openmediavault-mergerfs**, lo potete scaricare sotto la sezione *Sistema --> Plugins*.
> Per installarlo è sufficiente cercare il nome nel campo di ricerca e selezionare la voce *Installa*. A seguito di un riavvio sarà quindi possibile uilizzare il plugin.

### ABILITARE LA CONDIVISIONE DI RETE PER IL DISPOSITIVO

Dopo aver creato lo spazio sul nostro disco, sarà necessario abilitare le funzioni di condivisione file per far si che il NAS si presenti sulla rete. *Il modo migliore per condividere i file su una rete in cui sono presenti più sistemi operativi in uso è* **SAMBA**. [[SAMBA |Per aggiungere una connessione al sistema seguendo questa guida]].
Se invece volessimo *utilizzare* **NFS**, allora [[NFS|dovremo seguire questa guida]]. 

### CREAZIONE DEGLI UTENTI

Per condividere i dati in modo sicuro sulla nostra rete, è necessario creare degli utenti, in modo da poter effettuare una scrematura su chi può accedere a quali dati presenti nel nostro sistema, in modo da garantire la sicurezza dei file che condividiamo e per poter garantire la privacy di chi li ha condivisi, evitando potenziali problemi.
Per creare un nuovo utente, sulla pagina web di Openmediavault, (raggiungibile digitando l'indirizzo di rete sul nostro browser)

### CREARE IL PERCORSO DI RETE PER L'UNITA'

Su windows, una volta abilitata la condivisione con SAMBA, è possibile fare in modo che l'unità disco diventi riconoscibile in automatico tramite un *percorso di rete*.
Per connettere un'unità di rete basta selezionare su *Esplora risorse* la voce *il mio PC* e con il tasto destro selezionare *Connetti unità di rete*. DOpo aver assegnato una lettera all'unità e aver selezionato la cartella in cui condividere i file, basta selezionare la voce *fine* per terminare la procedura guidata. 
Se abbiamo seguito tutti i passaggi correttamente dinora, basterà solamente inserire le credenziali che abbiamo creato su *OpenMediaVault* e potremo connettere l'unità al nostro sistema, che risulterà disponibile direttamente su esplora risorse.

![[percorsorete.png|500]]

  

