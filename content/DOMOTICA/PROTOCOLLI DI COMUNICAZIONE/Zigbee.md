---
tags:
  - domotica
  - protocolli
  - zigbee
  - homeassistant
argomento: protocolli di rete
---
## *Introduzione*

Zigbee è un protocollo di comunicazione wireless progettato per applicazioni a basso consumo energetico e bassa larghezza di banda. È ampiamente utilizzato in ambito domotico per connettere dispositivi come sensori, luci, prese intelligenti e termostati, grazie alla sua capacità di creare **reti mesh** affidabili.

## *Caratteristiche principali*

- **Basso consumo energetico:** ideale per dispositivi alimentati a batteria.
- **Rete mesh:** i dispositivi possono inoltrare i messaggi, migliorando la copertura.
- **Compatibilità multiproduttore:** molti dispositivi di diversi brand possono interoperare.
- **Frequenza operativa:** 2.4 GHz (alcune varianti anche su 868 MHz o 915 MHz).

## *Architettura della rete Zigbee*

Zigbee è basato su un'architettura a livelli secondo il modello OSI semplificato. Le componenti principali della rete sono:

### 1. Coordinator
- È il nodo principale della rete.
- Si occupa di avviare la rete, assegnare gli indirizzi e gestire la sicurezza.
- In una rete Zigbee può esserci **un solo coordinator**.
- Esempi: coordinatori USB come *Sonoff Zigbee 3.0 Dongle Plus*, *ConBee II*, ecc.

### 2. Router
- Estende il raggio della rete inoltrando pacchetti tra dispositivi.
- Possono essere alimentati a rete e servono da "ponte" tra dispositivi distanti.
- Alcuni dispositivi Zigbee alimentati via rete (es. lampadine, prese) si comportano automaticamente da router.

### 3. End Device
- Sono i dispositivi finali (es. sensori, pulsanti, termometri).
- Comunicano solo col loro router o il coordinator.
- Non inoltrano traffico: hanno consumo energetico minimo e spesso funzionano a batteria.

## *Funzionamento della rete Mesh*

Zigbee utilizza una **topologia mesh**, in cui:
- Ogni router può collegarsi a più dispositivi.
- La rete è auto-riparante: se un nodo non è raggiungibile, il messaggio viene instradato attraverso un altro.
- Migliore è la disposizione dei router, più stabile è la rete.

## *Sicurezza*

Zigbee implementa crittografia AES a 128 bit per proteggere i dati in transito.
- Le chiavi di rete vengono condivise durante il *pairing*.
- Home Assistant e Zigbee2MQTT permettono di generare chiavi personalizzate.

## Come si integra in un sistema domotico

### Home Assistant + Zigbee

Per usare Zigbee in Home Assistant ci sono due approcci principali:

#### 🔹 Zigbee2MQTT
- Richiede MQTT Broker (es. Mosquitto).
- Supporta un’ampia gamma di dispositivi.
- Configurabile e personalizzabile.
- Interfaccia tramite web (Zigbee2MQTT-Frontend).

#### 🔹 ZHA (Zigbee Home Automation)
- Integrazione nativa in Home Assistant.
- Semplice da configurare.
- Meno flessibile di Zigbee2MQTT ma più diretta.

### Coordinator compatibili
Esempi di coordinatori supportati:
- Sonoff Zigbee 3.0 USB Dongle Plus (Texas Instruments CC2652P)
- Electrolama zzh
- ConBee II (deCONZ o ZHA)
- SkyConnect (ufficiale Home Assistant)

## Differenze rispetto ad altri protocolli

| Protocolo | Topologia     | Frequenza | Range       | Consumo     | Note                             |
|-----------|---------------|-----------|-------------|-------------|----------------------------------|
| Zigbee    | Mesh          | 2.4 GHz   | Medio       | Molto basso | Ampio supporto in domotica       |
| Z-Wave    | Mesh          | 868 MHz   | Alto        | Basso       | Più costoso, meno compatibile    |
| Wi-Fi     | Punto-punto   | 2.4/5 GHz | Alto        | Alto        | Alto throughput, no mesh         |
| Thread    | Mesh          | 2.4 GHz   | Medio       | Molto basso | Evoluzione compatibile con Matter|

## Limitazioni

- La banda 2.4 GHz può essere soggetta a interferenze con Wi-Fi.
- Alcuni dispositivi Zigbee sono “bloccati” (non standard o solo per un ecosistema).
- Il numero di dispositivi per router può essere limitato (tipicamente 20-40 per router).

## Best practice

- **Posiziona il coordinator lontano dal router Wi-Fi** per ridurre le interferenze.
- **Aggiungi router Zigbee (es. prese smart)** per stabilizzare la rete.
- **Usa un hub Zigbee su cavo USB con estensione** per distanziarlo fisicamente dal server/domotica.

## Debug e strumenti utili

- **Zigbee2MQTT Frontend:** per vedere la mappa della rete e diagnostica.
- **ZHA Visualizer:** per le reti gestite da ZHA.
- **CC2530/CC2652 sniffer:** per monitorare i pacchetti in tempo reale.
- **Home Assistant log:** utile per tracciare errori e pairing falliti.


> [!important] CONSIDERAZIONI
> 
 > Zigbee rimane una delle scelte più solide e mature per la domotica wireless, grazie alla sua stabilità, interoperabilità e bassi consumi.*