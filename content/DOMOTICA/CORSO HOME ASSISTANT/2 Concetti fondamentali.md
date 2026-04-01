---
title: Concetti fondamentali
argomento: domotica corso
tags:
  - domotica
  - corso
  - mqtt
  - zigbee
  - zwave
  - matter
  - wifi
  - homeassistant
  - googlehome
  - alexa
  - homekit
  - rete
---

In questo capitolo vedremo i concetti fondamentali che ci serviranno per comprendere tutto (o quasi tutto) quello che vedremo in questa guida. Parleremo dei vari tipi di protocollo disponibili, dei tipi di dispositivi che sono attualmente in commercio e soprattutto
## *I protocolli di comunicazione*

Esistono vari tipi di connessioni che vengono utilizzatiein ambito domotico, ma i principali si possono dividere in 4 *Protocolli di comunicazione*:

 - [[Zigbee]] basato su frequenza 2.4 GHz con cifratura proprietaria
 - [[Z-Wave]] basato su frequenza 868 MHz
 - [[Wi-fi 2.4 Ghz]] utilizza l'omonima frequenza ed è il più vecchio tra i 4
 - [[Thread]] Il nuovo standard unificato di comunicazione

Ogni sistema ha i suoi pro e i suoi contro, tuttavia ci sono alcune considerazioni da fare prima di scegliere il tipo di rete che vorremo utilizzare, ovvero:

### Che tipo di sistema devo pilotare?

La prima cosa da scegliere in questo caso è il tipo di utilizzo che vorremo fare con il nostro sistema, in quanto non è detto che tutti i protocolli di comunicazione supportino allo stesso modo tutti i tipi di dispositivi. Questo si applica sia per i dispositivi **Thread**, che ad ogni aggiornamento dello standard aggiunge qualche tipo di dispositivo alla lista dei supportati, ma che attualmente è carente su alcuni punti fondamentali, ad altri, come il **wifi**, che data la sua caratteristica intrinseca di comunicazione non permette l'impiego in determinati ambiti (in quanto il sistema wifi non prevede una funzionalità low energy a basso consumo).

> [!question]- COSA SCEGLIERE PER INIZIARE?
> In base ai miei esperimenti su decine di installazioni, se siete alle prime armi, il mio consiglio è quello di andare sul sicuro e scegliere **Zigbee**, in quanto ci fornisce un modo economico e abbastanza facile per installare i nostri primi componenti domotici. 
> I dispositivi Zigbee sono economici e non prevedono variazioni regionali di standard, per cui potete anche ordinarli sugli store esteri senza farvi problemi di compatibilità.
### Quanto voglio spendere

La spesa iniziale ovviamente va ad incidere sui dispositivi che andremo ad inserire nella nostra installazione, tenendo conto che alcuni componenti tendono a costare più di altri.
Un monitoraggio delle temperature può essere effettuato con una spesa abbastanza ridicola, in quanto i sensori costano veramente poco (e a volte sono già persino integrati nei dispositivi presenti in casa), mentre ad esempio, un monitoraggio della co2 o dei gas particolari (tipo le esalazioni di radon nelle cantine) tendono ad avere un costo maggiore in quanto *è più costoso l'hardware montato all'interno*. Se pensiamo ad esempio al caso delle telecamere invece, oltre ad avere già il costo del materiale, dovremmo mettere in preventivo che un Raspberry Pi potrebbe iniziare ad avere poca potenza di calcolo per poter fare uno streaming continuo con più di 4/5 telecamere connesse.
### Il protocollo è sicuro

Per garantire la sicurezza del nostro impianto, avremo varie alternative tra cui scegliere. Alcuni protocolli sono già di per se soggetti a una criptatura dei dati che garantisce un adeguato livello di sicurezza, ma la gestione di questi *può essere migliorata ulteriormente andando a sfruttare degli standard elevati garantiti da standard di comunicazione a cui ci possiamo appoggiare*, come ad esempio [[MQTT (Message Queuing Telemetry Transport)]] oppure [[Matter]]], che permettono di aggiungere un ulteriore step alla gestione dei dati andando a inserire credenziali extra che ci permettono di suddividere il traffico in base all'uso fatto.

> [!tip]- Ci sono costi aggiuntivi?
> Il grande vantaggio di utilizzare MQTT e Matter è che non comporta costi aggiuntivi al sistema, in quanto la gestione di questi viene gestita interamente da Home Assistant e può essere fatta senza aggiungere altri dispositivi al nostro sistema. Oltretutto il costo in termini di risorse di sistema è veramente basso, per cui non ci sono controindicazioni nell'utilizzo di questi sistemi se non quello di un eventuale blocco di comunicazione se sbagliamo i settaggi dedicati.

### Ci sono interferenze col segnale?

Prima di decidere quale sistema utilizzare all'interno del nostro impianto, sarà *necessario effettuare una scansione di segnale per verificare che non ci siano eventuali disturbi di comunicazione* che derivano da eventuali segnali presenti fuori dalla nostra struttura, o che provengano dagli altri dispositivi presenti all'interno di casa ( come ad esempio segnali Wifi, antenne radio poste in presenza della casa, campi elettrici di portata notevole) che potrebbero andare a ridurre la portata della nostra rete che andremo a montare.
