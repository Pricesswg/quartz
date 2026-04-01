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

> [!abstract] COSA FAREMO IN QUESTA GUIDA
> In questo progetto vedremo come costruire in casa e come configurare un piccolo NAS basato su un Raspberry, per poter condividere sulla rete i nostri dati andando a risparmiare parecchi soldi rispetto a soluzioni già pronte molto più costose.

## **Introduzione al progetto**  

Come potete immaginare dal titolo, il progetto nasce dall'esigenza di costruire un NAS per poter ospitare i dati che, a forza di produrre video, stanno diventando stretti sul PC principale.
Avendo la necessità di poterli editare al volo, o comunqu\

Per la costruzione del #PiNAS saranno necessari:
 - Un *Raspberry Pi5* (si può utilizzare anche un Pi4, tanto non c'è troppa potenza di calcolo necessaria)
 - Un *HAT M2 o SSD* da definire in anticipo dato che in base a questo, si dovranno comprare le unità da montare sopra. Si possono trovare varianti da 1 a 4 slot, ma considerate che in genere, se di buona marca, gli *NMVE* sono da preferire rispetto ai *SATA* per via delle dimensioni ridotte e per la maggiore velocità di trasferimento dei dati.
 - Un *alimentatore 5V 5A* per il *Pi5*,  *5V 3A* per il *Pi4*.
 - Una *scheda di memoria SD*, di almeno 8GB per ospitare il sistema operativo.

![[pinas.jpg|700]]


> [!NOTE]
> **MATERIALI OPZIONALI** 
> Non servono per il progetto in se, ma solo per estetica o funzioni opzionali
>  - Un *case* per poter ospitare il raspberry in modo che non prenda eccessiva polvere
>  - **ALTAMENTE CONSIGLIATO** un dissipatore attivo con ventola, per raffreddare sia il Raspberry che i dischi montati
>  - Un **HAT per UPS**, in modo che abbia modo di restare acceso in caso di mancanza di corrente, perlomeno fino a quando non viene terminata la scrittura.

## **Software utilizzato**

Per la realizzazione del progetto ho deciso di utilizzare **OpenMediaVault**, un programma gratuito scaricabile da [questo link](https://www.openmediavault.org/). 

![[openmediavault.png]]


Possiamo adesso passare all'assemblaggio seguendo questo link --> [[2 - Assembliamo il NAS]]

