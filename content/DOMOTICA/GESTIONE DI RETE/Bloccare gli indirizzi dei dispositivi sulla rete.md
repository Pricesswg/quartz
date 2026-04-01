---
tags:
  - rete
  - DHCP
  - server
argomento: rete
---

> [!abstract] COSA FAREMO IN QUESTA GUIDA
> Lo scopo della guida è quello di imparare come bloccare gli indirizzi di rete dei dispositivi in modo che questi non cambino in modo automatico ogni volta che andremo a disconnetterli.

Se nel nostro sistema è presente un [[DHCP|server DHCP]] , allora sarà necessario bloccare l'indirizzo IP del nostro dispositivo per far si che questo non possa cambiare nel tempo. 
Ciò serve soprattutto in ambito di rete (per unità disco condivise ad esempio) o per la domotica (in quanto vorremo che i nostri dispositivi non cambino i parametri di rete costantemente, dato che non tutte le integrazioni di Home Assistant sono compatibili con questo sistema).

## Blocco dei dispositivi sulla rete: guida tecnica

Bloccare dispositivi dalla rete può essere necessario per motivi di sicurezza, controllo del traffico, o gestione della banda. Questo può avvenire a livello di **[[MAC Address|livello 2 (MAC address)]]** o **livello 3 (indirizzo IP)**. Di seguito una guida generica e approfondita.

### 1. Accesso al pannello del router

Apri un browser e digita l'indirizzo IP del gateway (di solito uno tra):
- `192.168.1.1`
- `192.168.0.1`
- `192.168.1.254`

Effettua il login con le credenziali di amministrazione del router (spesso sono `admin/admin` o `admin/password`, salvo modifiche).

---

### 2. Identificare il dispositivo da bloccare

Naviga verso la sezione tipicamente chiamata:

- **Client list** / **Connected Devices**
- **DHCP Clients**
- **LAN Status** o **Wi-Fi Status**

Annota:
- **Hostname** (se disponibile)
- **Indirizzo IP**
- **MAC Address** (esadecimale, 6 byte, es. `BC:14:EF:12:34:56`)

---

### 3. Metodi di blocco disponibili

#### Metodo A – MAC Filtering (Livello 2)

- Naviga verso **Access Control**, **MAC Filtering** o **Security > MAC Control**.
- Attiva il filtro e scegli tra:
  - **Allow list (whitelist)** – consente solo dispositivi noti
  - **Deny list (blacklist)** – blocca specifici MAC address

Aggiungi il MAC address del dispositivo da bloccare.  
**Pro:** Agisce a livello hardware.  
**Contro:** Facile da aggirare con **MAC spoofing**.

#### Metodo B – IP Binding + Regole Firewall (Livello 3)

1. Imposta un **IP statico** per il dispositivo (Static DHCP Lease).
2. Vai nella sezione **Firewall** o **Access Rules**.
3. Crea una nuova regola che:
   - **Blocchi l’IP assegnato** (es. `192.168.1.57`)
   - In ingresso e/o uscita
   - Su tutte le porte o solo alcune (es. blocco internet ma accesso LAN)

**Pro:** Più flessibile, può limitare solo Internet o solo LAN.  
**Contro:** L’indirizzo IP può cambiare se non assegnato staticamente.

#### Metodo C – Isolamento tramite VLAN (avanzato)

Per chi usa router con firmware avanzato (es. OpenWRT, pfSense, Mikrotik):
- Crea una **VLAN separata** e assegna i dispositivi da isolare.
- Applica regole di routing e firewall per limitare o impedire il traffico.

---

### 4. Blocco tramite app o sistemi cloud

Molti router moderni (es. TP-Link Deco, Fritz!Box, Netgear Nighthawk) offrono app mobili o interfacce cloud per:
- Bloccare/disconnettere dispositivi
- Impostare limiti di tempo
- Creare profili con regole predefinite

---

### Considerazioni sulla sicurezza

- Il **MAC Filtering da solo non è sicuro**: è facilmente bypassabile da chi conosce l’indirizzo MAC di un dispositivo autorizzato.
- Per ambienti sensibili, utilizzare:
  - **Autenticazione WPA2/WPA3**
  - **Reti separate (es. guest Wi-Fi)**
  - **Monitoraggio regolare dei dispositivi connessi**
  - **Access Control centralizzato** (es. con controller UniFi, pfSense)

---

### Strumenti utili

- `arp -a` (Windows/macOS/Linux): visualizza dispositivi connessi nella rete
- App di analisi rete come **Fing**, **Angry IP Scanner**, **Wireshark**
- Router con firmware avanzato: **OpenWRT**, **DD-WRT**, **pfSense**

---

### Conclusione

Bloccare un dispositivo è possibile a più livelli: fisico (MAC), logico (IP), e tramite firewall o VLAN. Per ambienti domestici, il MAC Filtering è spesso sufficiente, ma in contesti professionali è consigliabile usare metodi più robusti.



