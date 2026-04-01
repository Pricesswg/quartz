---
title: Installare Home Assistant
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
  - virtualmachine
  - docker
  - container
---

## *Cos'è Home Assistant?*

**Home Assistant** è una piattaforma open-source per la domotica, progettata per offrire il pieno controllo e l'automazione dei dispositivi smart presenti in casa. È compatibile con una vasta gamma di protocolli e dispositivi, come *Zigbee, Z-Wave, Wi-Fi, Thread e Matter*, permettendo di unificarne il controllo in un’unica interfaccia. Home Assistant può essere eseguito su *Raspberry Pi, mini PC, NAS o server dedicati*, e grazie alla sua architettura flessibile, consente di creare automazioni complesse e scenari personalizzati. Uno dei suoi punti di forza è l'integrazione con assistenti vocali (Google Assistant, Amazon Alexa, Apple Siri) e la possibilità di funzionare completamente in locale, garantendo così massima privacy e affidabilità anche senza connessione Internet.

### Quale Hardware scegliere?

Il grande pregio di questo sistema è che richiede veramente poche risorse per poter essere eseguito, pertanto potremo installarlo su praticamente qualsiasi dispositivo che possiamo trovare in casa. In base alle nostre esigenze in fatto di potenza di calcolo, potremo integrare un Hardware più o meno potente per far fronte alle richieste  della nostra installazione.
Di seguito potete trovare i tipi più comuni di Hardware su cui installarlo:
 - *Raspberry Pi*: Il modello più diffuso e il più facile da installare. Il suo Hardware discreto poi ci permette di poterlo nascondere in qualunque punto della casa, e in base alle nostre necessità, sarà possibile aggiungere un NAS (per mantenere l'alimentazione anche in caso di blackout) e altre espansioni (dischi extra e antenne).
- *SBC (Single Board Computer)* Sono dei piccoli pc con la componentistica saldata sulla scheda, tecnicamente molto simile a un Raspberry ma molto più potente e performante. Su questi sistemi è possibile installare anche una distribuzione *Docker* per poterlo avviare come un *container* o una *Virtual Machine*.
- *Mini PC* Si tratta di pc veri e propri, ospitati in case ridotti per avere la massima flessibilità possibile. Su queste macchine è consigliabile installare una distribuzione di Docker e si consiglia di utilizzarli solo in presenza di installazioni abbastanza grandi in modo da giustificare l'Hardware impiegato e il consumo energetico maggiore. Se la nostra installazione domotica prevede l'uso di diverse telecamere (più di 10 - 12) e si utilziza un server Frigate, allora si può iniziare a pensare di dedicare la macchina a qeusto tipo di installazione e installare *HASSio (Home Assistant Operative System)* e una istanza di *Frigate*.
- *Server / NAS* Nel caso in cui avessimo invece un server centralizzato, è altamente consigliato l'utilizzo di una installazione *Docker* e di gestire internamente ad esso i plugin necessari per far gestire tutti i nostri servizi accessori (*Mosquitto*, *Zigbee2MQTT*, ecc.)

  > [!warning] ATTENZIONE!
  > Questo tipo di installazione richiede una gestione più complessa e prevede che si abbiano determinate conoscenze nella gestione delle reti e dell'Hardware, pertanto è altamente sconsigliato l'utilizzo a un utente non esperto.


  ### Installare Home Assistant:
  
  **Riferimenti ai video su Youtube**

1. Installazione su Raspberry Pi: [https://www.youtube.com/watch?v=ayyA7X1Bsq0]()  
2. Installazione su MiniPC:  *DA FARE*
3. Installazione da Proxmox: *DA FARE*