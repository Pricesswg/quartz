---
tags:
  - PiNAS
  - openmediavault
  - rete
  - samba
  - DIY
  - raspberry
  - linux
argomento: progetti DIY
---
Iniziamo ad assemblare il nostro prodotto. Per prima cosa sarà necessario montare il *dissipatore* attivo, facendo attenzione a connettere il cavo di alimentazione della ventola nel verso corretto.

Una volta assemblato la struttura di dissipazione primaria, possiamo andare a connettere l'*hat di supporto* per i dischi M2, oppure quello per i dischi SATA, in base alle nostre esigenze.
Prima di procedere oltre però, fate attenzione alle seguenti note:

> [!QUESTION] CHE TIPO DI HAT SCEGLIERE?
> Nel caso illustrato in questa guida ho scelto di utilizzare un *HAT a doppio slot* per dischi M2, in modo da avere un doppio supporto **in caso volessi utilizzare una partizione di tipo RAID 1** ([Trovate altre informazioni a riguardo del sistema RAID qua](https://en.wikipedia.org/wiki/Standard_RAID_levels))in modo da poter mantenere al sicuro i dati in caso di danno all'unità di archiviazione, ma *la procedura di configurazione non sarà diversa* nel caso in cui decidessimo di utilizzare un altro tipo di connettore. La procedura sarà sempre uguale, quello che andrà a cambiare invece sarà solo il tipo di unità che andremo a collocare sul nostro sistema.

> [!DANGER] ATTENZIONE AL COLLEGAMENTO!
> La connessione delle unità esterne al NAS avviene attraverso una piattina di connessione per lo scambio dei dati chiamata **FFC**, che deve essere installata prima di andare a inserire le viti di ritenzione tra i vari elementi. 
> Nel caso degli HAT connessi direttamente sopra al raspberry, **verificate che la piattina di connessione sia ben salda nel suo slot di collegamento**, e soprattutto *fate riferimento al manuale di installazione che vi viene fornito con l'HAT, in quanto la piattina ha una direzione, se la invertite non comunica i dati!* (e vi tocca smontare tutto 😵 )
> ![[caviffc.png|200]]

Dopo aver collegato le piattine di collegamento e installato i distanziali per l'HAT, dovremo collegare la nostra struttura attraverso la porta GPIO presente a lato del nostro raspberry. Si tratta di quella struttura nera con i piedi a lato del pannello. *Fate attenzione a inserire l'unità perché alcuni HAT sono particolarmente duri da inserire e spingere in modo eccessivo potrebbe far si che il Raspberry si possa danneggiare nel processo*. Esercitate una piccola pressione finché non sentite la struttura entrare in posizione.

![[gpio.jpg|500]]


Una volta terminata l'installazione il nostro PiNAS dovrebbe presentarsi così:

![[installazione.jpg|500]]

##**Opzionale: Montare un case al PiNAS

Se avete necessità di lasciare il dispositivo su una scrivania a vista, o se semplicemente preferite avere un livello di sicurezza in più ed evitare che qualcuno possa mettere le mani direttamente sulla scheda, è possibile installare un case esterno al nostro PiNAS, in modo da renderlo più protetto. 
Sono presenti vari modelli in commercio, io ho optato per il modello della Geekworm che potete vedere qui sotto:

![[case.jpg|500]]

Possiamo passare adesso a installare OpenMediavault sul nostro sistema qui --> [[3 - Installare OpenMediaVault sul sistema]].