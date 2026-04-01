---
tags:
  - protocolli
  - rete
  - matter
  - homeassistant
argomento: protocolli di rete
---
**Matter** è uno standard aperto per la comunicazione tra dispositivi smart, promosso da importanti aziende del settore (come Apple, Google, Amazon, Samsung e altri) tramite la **Connectivity Standards Alliance (CSA)**.

L'obiettivo di Matter è **semplificare l'interoperabilità tra dispositivi smart home**, permettendo ai prodotti di marchi diversi di comunicare tra loro in modo affidabile, sicuro e senza lock-in proprietari.

## *Come funziona*

- Matter opera **principalmente su reti IP**, utilizzando protocolli esistenti come **Wi-Fi, Ethernet e Thread** per la comunicazione.
- Ogni dispositivo Matter ha un **certificato di sicurezza** e usa la **crittografia end-to-end** per le comunicazioni.
- Supporta **controllo locale** (senza necessità di cloud), migliorando **velocità, privacy e affidabilità**.
- È progettato per essere **multi-controller**, permettendo di controllare lo stesso dispositivo da Google Home, Alexa, Apple HomeKit e altri contemporaneamente.

## *Tipi di dispositivi supportati*

Al momento, Matter supporta dispositivi come:
- Luci e interruttori
- Prese smart
- Serrature
- Termostati
- Sensori (movimento, temperatura, apertura)
- TV e controller media (in sviluppo)

## *Matter e Home Assistant*

Home Assistant supporta Matter tramite:
- **Thread Border Router** (necessario per dispositivi basati su Thread, es. dongle SkyConnect o Home Assistant Yellow)
- **Controller Matter nativo**, disponibile da Home Assistant 2023.1 in poi
- Supporto sia alla **commissioning (aggiunta dispositivi)** che al controllo locale

### Requisiti per l'integrazione

- Una versione recente di Home Assistant (≥ 2023.1)
- Una **chiave Matter certificata** (es. Home Assistant SkyConnect, OTBR con dongle nRF52840)
- Dispositivi compatibili Matter già aggiornati al firmware corretto

### Commissioning dei dispositivi

Per integrare un dispositivo Matter:
1. Attiva l'integrazione **Matter** in Home Assistant.
2. Scansiona il **codice QR Matter** del dispositivo.
3. Segui la procedura guidata per completare il pairing.
4. Il dispositivo sarà visibile in Home Assistant e potrà essere controllato direttamente.

## Vantaggi di Matter

- **Standard universale**: un solo protocollo per tutti i dispositivi
- **Controllo locale**: più affidabile e indipendente dal cloud
- **Maggiore sicurezza**: crittografia integrata
- **Interoperabilità reale**: dispositivi multi-brand, multi-hub
- **Aggiornamenti continui**: supportato attivamente da una vasta alleanza industriale


> [!success] CONSIDERAZIONI FINALI
>  Matter è una delle tecnologie chiave del futuro della domotica, e la sua integrazione in Home Assistant rende la casa intelligente più aperta e affidabile.