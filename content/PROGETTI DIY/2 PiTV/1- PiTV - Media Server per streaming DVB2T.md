---
tags:
  - raspberry
  - pitv
  - rete
  - linux
  - dlna
  - samba
argomento: progetti DIY
---

> [!abstract] COSA FACCIAMO IN QUESTO PROGETTO
> Vedremo come costruire un piccolo server con un Raspberry Pi per trasmettere sui dispositivi sulla rete i canali del digitale terrestre. Sarà possibile vedere attraverso la rete di casa uno streaming attraverso il [[DLNA - Digital Living Network Alliance|servizio DLNA]]  e condividere i file con il protocollo [[SAMBA]].

Siccome a casa non è possibile vedere più la televisione, dato che stanno gradualmente rimuovendo i pali che portano il segnale, e bisogna scegliere o i canali mediaset o quelli RAI, ho deciso di mettere in piedi un piccolo server casalingo per trasmettere la TV attraverso la rete ethernet. Questo comporta anche un secondo vantaggio, ovvero che *non è più necessario portare un cavo di collegamento con l'antenna al televisore*, sarà sufficiente portare il cavo della corrente potremo vedere tutto direttamente usando il segnale di rete.

## *Materiali necessari*

Per il progetto basterà utilizzare un classico *Raspberry PI*, qualunque versione va bene, io utilizzo un pi3 dato che ne avevo uno che cresceva in casa che era derivato da un'altro progetto, ma potete utilizzare anche un pi2 o un pi4. Naturalmente, non essendoci grandi funzionalità di encoding video in corso, un pi5 risulta sprecato, a meno di non voler convertire file enormi in 4k.

MATERIALI NECESSARI:
 - *Raspberry PI* (dal 3 in avanti)
 - *Alimentatore*
 - *Case* Utile se lo volete utilizzare su un televisore
 - *Microsd* Minimo 32 GB, meglio 128 se volete conservare qualche film a bordo

MATERIALI OPZIONALI:
 - *Cavo HDMI* Se lo volete connettere al TV
 - *Cavo LAN* Se lo volete connettere ad una rete fisica, ma potete usare anche il Wifi
 - *Cavo antenna + Raspberry TV HAT* Per processare tramite il raspberry direttamente il segnale in arrivo dall'antenna
   
## *INSTALLAZIONE HARDWARE*

Qui è semplice, se usate il segnale via rete basterà chiudere il Raspberry dentro il suo involucro, altrimenti, nel caso usassimo un *TV Hat*, basterà montarlo direttamente sulla *porta UART* **verificando che i piedi di supporto coincidano** (ne ha solo tre possibili, non potete sbagliare).

> [!warning] NOTA SUL TV HAT
> Fate attenzione quando comprate il case, perchè non tutti sono compatibili con i buchi di questo tipo di hat. Nel caso non fossero presenti, tenete conto di dover fare dei buchi con il trapano, per cui prendetene uno di plastica.
> 

## **INSTALLAZIONE SOFTWARE

Per la parte software invece, dovremo creare la solita microsd di avvio per il nostro sistema. Per questo progetto utilizzeremo una distribuzione Linux molto piccola, in quanto serve solamente per poter trasmettere i dati della TV e non avremo bisogno di altre funzioni aggiuntive. 
Ho scelto di usare **Libreelec** per questo progetto, in quanto fornisce tutto già preinstallato e configurato, potete scaricarlo a questo link: https://libreelec.tv/

Basta selezionare la versione che vorremo scaricare ed effettuare il Download dell'immagine e caricarla sulla nostra microsd utilizzando *Raspberry Pi Imager*, selezionando il tipo di raspberry, la nostra iso che abbiamo appena scaricato e la microsd di destinazione.

Una volta terminato il processo, possiamo procedere a inserire la scheda nel raspberry e alimentare il sistema.

> [!nota] NOTA:
> A questo punto vi consiglio di collegare il tutto a u monitor o alla TV, ma per fare più in fretta nei successivi passaggi sarebbe meglio collegare una tastiera al nostro raspberry dato che dovremo inserire parecchi cambi a mano e utilizzare il telecomando della televisione non è consigliato.
> 

Il software che utilizzeremo per gestire il nostro streaming è **KODI** (https://kodi.tv/), per vedere come configurarlo ci spostiamo al [[2 - Configurare KODI per lo streaming|capitolo successivo]].
