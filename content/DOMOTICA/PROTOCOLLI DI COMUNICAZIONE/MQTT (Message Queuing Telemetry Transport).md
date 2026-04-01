---
tags:
  - protocolli
  - rete
  - mqtt
  - homeassistant
argomento: protocolli di rete
---
MQTT è un protocollo di comunicazione leggero e basato su messaggi, progettato specificamente per l'Internet of Things (IoT). Grazie alla sua efficienza, è ideale per ambienti con connessioni instabili o dispositivi con risorse limitate. Si basa su un modello di comunicazione **publish-subscribe**, che permette una gestione flessibile e scalabile dei messaggi tra dispositivi.

## *Componenti Principali*

### Broker

Il **broker MQTT** è il cuore del sistema: un server centrale che gestisce le connessioni, riceve i messaggi dai client pubblicatori e li distribuisce ai client sottoscritti. Tutta la comunicazione passa attraverso il broker.

### Client

Un **client MQTT** può essere un dispositivo fisico (come un sensore) o un'applicazione software. I client possono **pubblicare** (inviare) messaggi su determinati argomenti oppure **sottoscriversi** (ricevere) a uno o più argomenti.

### Topics

Gli **argomenti (topics)** sono canali logici attraverso cui passano i messaggi. Sono strutturati gerarchicamente, ad esempio:

```
casa/cucina/temperatura
```

Sono supportati due caratteri jolly per gestire sottoscrizioni flessibili:

- `+` sostituisce un solo livello (es. `casa/+/temperatura`)
- `#` sostituisce tutti i livelli successivi (es. `casa/#`)

## *Modello Publish-Subscribe*

Il modello publish-subscribe disaccoppia mittenti e destinatari:

- **Publish**: un client invia un messaggio a un topic specifico
- **Subscribe**: un client si registra per ricevere messaggi su uno o più topic

Questo approccio rende MQTT estremamente scalabile e adatto a sistemi distribuiti.
## *Qualità del Servizio (QoS)*

MQTT offre tre livelli di qualità del servizio per controllare l'affidabilità della consegna dei messaggi:

- **QoS 0 (Al massimo una volta)**: senza conferma, messaggio non garantito.
- **QoS 1 (Almeno una volta)**: consegna garantita, ma possibile duplicazione.
- **QoS 2 (Esattamente una volta)**: massima affidabilità, senza duplicati.

## Sicurezza

Per proteggere la comunicazione e l'accesso al broker, MQTT supporta:

- **Autenticazione** con username e password
- **Crittografia TLS/SSL** per proteggere i dati in transito
- **Autorizzazioni per topic**, per limitare accessi in base al client

### Login e Autenticazione

L'uso di credenziali (username/password) migliora la sicurezza impedendo connessioni non autorizzate. Inoltre, consente una gestione granulare dei permessi per ciascun client, garantendo che ogni dispositivo possa pubblicare o sottoscriversi solo agli argomenti previsti.

## *Integrazione con Altri Protocolli Domotici*

MQTT è spesso utilizzato come ponte tra protocolli differenti. Ad esempio:

- **Zigbee** e **Z-Wave**: tramite gateway che trasformano i messaggi in MQTT
- **Wi-Fi**: sensori o attuatori connessi direttamente al broker
- **Matter**: integrabile in scenari ibridi, sfruttando MQTT come canale di comunicazione interno

Questa interoperabilità rende MQTT una scelta eccellente per sistemi domotici complessi e multi-protocollo.

## *Integrazione con Home Assistant*

Home Assistant supporta MQTT nativamente, permettendo il controllo e il monitoraggio di dispositivi tramite questo protocollo. L'integrazione avviene definendo il broker e le credenziali nel file di configurazione:

```yaml
mqtt:
  broker: "192.168.1.100"
  port: 1883
  username: "user"
  password: "password"
```

Una volta configurato, è possibile integrare sensori, interruttori, luci e altri dispositivi MQTT direttamente nell'interfaccia di Home Assistant.
## Vantaggi di MQTT

- **Protocollo leggero**: ideale per microcontrollori e connessioni mobili
-  **Bassa latenza**: comunicazione quasi in tempo reale
- **Scalabile**: adatto a reti con molti dispositivi
- **Flessibile**: con il sistema di topic e wildcard
- **Estensibile**: si integra con altri protocolli e piattaforme

>[!success] CONSIDERAZIONI FINALI
>MQTT si conferma uno strumento fondamentale per l'automazione e l'IoT, grazie alla sua semplicità, efficienza e capacità di integrazione.