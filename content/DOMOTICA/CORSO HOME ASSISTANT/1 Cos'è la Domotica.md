---
title: Cos'è la Domotica
argomento: domotica corso
tags:
  - domotica
  - corso
  - mqtt
  - zigbee
  - zwave
  - matter
  - wifi
  - homekit
  - googlehome
  - alexa
  - rete
  - homeassistant
---

> [!abstract] COSA FAREMO IN QUESTA GUIDA
> In questo corso impareremo le basi della domotica, scopriremo cos'è, come sfruttarla per migliorare l'efficienza della nostra casa e a iniziare i primi passi in questo mondo.
> Vedremo anche insieme come iniziare a configurare Home Assistant e quali protocolli di comunicazione utilizzare per i nostri dispositivi.

La **domotica** è l'insieme delle tecnologie applicate all'automazione degli edifici, con l'obiettivo di migliorare la qualità della vita, aumentare la sicurezza, ridurre i consumi energetici e facilitare la gestione degli impianti.

Attraverso sensori, attuatori e dispositivi intelligenti, è possibile controllare e automatizzare funzioni come:
- illuminazione 
- climatizzazione 
- videosorveglianza 
- sistemi di allarme 
- gestione dei consumi  
- elettrodomestici   

La domotica moderna si integra con **assistenti vocali**, **app per smartphone** e **piattaforme di controllo centralizzate** come *Home Assistant*, rendendo l'interazione con la casa sempre più semplice e personalizzabile.

---

###  Protocolli di comunicazione

I dispositivi domotici comunicano tra loro tramite diversi protocolli, ognuno con caratteristiche specifiche:

- **Zigbee**: protocollo mesh wireless a bassa potenza, ideale per sensori e attuatori alimentati a batteria.
- **Z-Wave**: simile a Zigbee, con interoperabilità garantita tra dispositivi certificati e ottima portata.
- **Wi-Fi**: molto diffuso, consente la connessione diretta alla rete domestica ma ha consumi più elevati.
- **Matter**: nuovo standard universale per la smart home, progettato per garantire compatibilità tra dispositivi di diversi produttori e una configurazione semplificata.

La scelta del protocollo dipende da vari fattori, come la copertura della rete, la compatibilità dei dispositivi e le esigenze energetiche.

### MQTT e integrazione con Home Assistant

**MQTT** (Message Queuing Telemetry Transport) è un protocollo di messaggistica leggero, pensato per la comunicazione tra dispositivi IoT. In ambito domotico, consente a sensori, microcontrollori e dispositivi smart di inviare e ricevere dati in tempo reale tramite un **broker MQTT** (come Mosquitto).

In Home Assistant, MQTT può essere usato per:
- ricevere dati da dispositivi personalizzati (es. sensori su ESP32, Tasmota, Zigbee2MQTT)
- inviare comandi (es. accensione/spegnimento di relè)
- integrare dispositivi non nativamente supportati

È un ponte ideale per espandere le funzionalità della smart home oltre le integrazioni ufficiali.

###  Integrazione con Google, Alexa e Apple

I principali assistenti vocali offrono funzionalità di controllo domotico:

- **Google Home**: comandi vocali e routine tramite Google Assistant
- **Amazon Alexa**: ampia compatibilità con dispositivi smart, gestione vocale ed automazioni
- **Apple HomeKit**: integrazione nativa con iOS, elevata attenzione alla privacy

**Home Assistant** funge da "ponte universale" tra tutti questi ecosistemi, consentendo di:
- controllare dispositivi compatibili con protocolli diversi da un’unica interfaccia
- unificare le app sparse in un’unica dashboard centralizzata
- creare automazioni avanzate che coinvolgano dispositivi di brand differenti

> [!note] IN SINTESI:
> Home Assistant permette di accorpare in un unico punto tutti i dispositivi smart della casa, integrando anche gli assistenti vocali e offrendo il massimo controllo, flessibilità e personalizzazione.