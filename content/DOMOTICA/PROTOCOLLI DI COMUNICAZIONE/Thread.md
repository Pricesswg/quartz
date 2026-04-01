---
tags:
  - protocolli
  - rete
  - thread
  - homeassistant
argomento: protocolli di rete
---
**Thread** è un protocollo di comunicazione wireless a basso consumo basato su IPv6, progettato specificamente per la **domotica moderna** e le applicazioni IoT. È sviluppato dal **Thread Group** (guidato da Google, Apple, e altri) e pensato per essere sicuro, affidabile, scalabile e interoperabile.

È alla base dello standard **Matter**, ma può funzionare anche indipendentemente, creando una **rete mesh IP-native** tra i dispositivi.

---

## **Caratteristiche principali

- **Tecnologia di trasporto**: IPv6 over 6LoWPAN.  
- **Frequenza**: 2.4 GHz (come Zigbee e Wi-Fi).  
- **Rete mesh**: auto-configurante, con routing intelligente.  
- **Basso consumo**: adatto a dispositivi a batteria.  
- **Sicurezza**: crittografia AES-128 end-to-end.  
- **Nessun single point of failure**: se un nodo cade, la rete si auto-ripara.  
- **Supporto diretto per Matter**: può trasportare dispositivi Matter senza necessità di bridge.

---

## Thread vs altri protocolli

| Caratteristica        | Thread                       | Zigbee                    | Z-Wave                    | Wi-Fi                     |
|------------------------|------------------------------|----------------------------|----------------------------|----------------------------|
| Frequenza              | 2.4 GHz                      | 2.4 GHz                    | 868/915 MHz                | 2.4 / 5 GHz                |
| Tipo di rete           | Mesh IPv6                    | Mesh proprietaria          | Mesh proprietaria          | Point-to-AP                |
| Consumo energetico     | Molto basso                  | Basso                      | Molto basso                | Alto                       |
| Interoperabilità       | Alta (standard IP, Matter)   | Limitata tra brand         | Alta se certificato        | Alta, ma cloud-dipendente |
| Necessità di hub       | Border router (non bridge)   | Zigbee hub                 | Z-Wave controller          | Nessuno, ma spesso cloud  |
| Supporta Matter        | ✔️                           | Solo tramite bridge        | No                         | ✔️                         |

---

## **Architettura della rete Thread

Una rete Thread è composta da diversi ruoli:

- **Border Router**: collega la rete Thread alla rete IP (es. Wi-Fi/Ethernet). Es. HomePod Mini, Nest Hub, Echo 4, Raspberry Pi + dongle Thread.
- **Router**: dispositivi che smistano pacchetti e tengono in piedi la mesh.
- **End Device**: dispositivi connessi (lampadine, sensori) a basso consumo.
- **Leader**: nodo che gestisce la rete ma può cambiare in automatico se cade.


[ Internet ]
	↓
[ Home Assistant + Border Router ]
	↓
[ Thread Mesh Network ]
	↳ Lampadina Thread
	↳ Sensore Porta Thread
	↳ Termostato Thread

## Integrazione con Home Assistant

Home Assistant può gestire Thread tramite l’integrazione **Matter + Thread** usando un **Thread Border Router**.

### Cosa serve:

- **Home Assistant aggiornato (2023.12+)**
- Un **dongle Thread compatibile** (es. SkyConnect)
- Oppure un device che già fa da Border Router (es. HomePod Mini)

Una volta installato, Thread viene configurato automaticamente e visualizzato in **Settings → Thread → Network**.

## **Vantaggi

- Scalabile e adatto a grandi reti.
- Compatibile con Matter.
- Nessun bridge proprietario richiesto.
- Sicurezza integrata nativamente.
- Ottimo per dispositivi a batteria.

## **Svantaggi

- Più recente, ancora in diffusione.
- Requisti hardware specifici per il Border Router.
- Non tutti i dispositivi Thread sono ancora compatibili con Matter.

## **Quando scegliere Thread?

Thread è la scelta ideale se:

- Stai costruendo una **rete Matter-ready**.
- Vuoi evitare hub e bridge proprietari.
- Stai utilizzando dispositivi con **basso consumo energetico**.
- Vuoi una rete **auto-riparante** e decentralizzata.

>[!tip] CONSIDERAZIONI FINALI
>Thread rappresenta l'evoluzione della domotica mesh, offrendo **prestazioni moderne, supporto a Matter** e gestione nativa tramite IP. È destinato a diventare lo standard dominante nei prossimi anni, specialmente in combinazione con Home Assistant e le piattaforme di smart home open-source.