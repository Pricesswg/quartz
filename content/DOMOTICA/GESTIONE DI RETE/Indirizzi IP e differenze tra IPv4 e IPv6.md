---
tags:
  - rete
  - server
  - ip
argomento: rete
---

Gli **indirizzi IP** (Internet Protocol) identificano in modo univoco ogni dispositivo all'interno di una rete. Ogni dispositivo connesso (PC, smartphone, stampante, router, ecc.) deve avere un indirizzo IP per comunicare con gli altri dispositivi.

### 1. Cos'è un indirizzo IP

Un indirizzo IP è un identificatore numerico assegnato a ciascun dispositivo connesso a una rete che utilizza il protocollo IP. Serve per:
- Identificare univocamente il dispositivo nella rete
- Determinare la posizione logica del dispositivo nella topologia della rete
- Instradare correttamente i pacchetti di dati

### 2. IPv4: caratteristiche

- **Formato**: Quattro numeri decimali separati da punti (dot-decimal), ciascuno da 0 a 255  
  Esempio: `192.168.1.10`
- **Lunghezza**: 32 bit (4 byte)
- **Totale indirizzi disponibili**: circa 4,3 miliardi
- **Utilizzo**: È il formato più comune, ancora ampiamente utilizzato
- **Limiti**: A causa dell’esaurimento degli indirizzi, si utilizzano NAT (Network Address Translation) per condividere un singolo IP pubblico tra più dispositivi privati

### 3. IPv6: caratteristiche

- **Formato**: Otto gruppi di quattro cifre esadecimali separati da due punti  
  Esempio: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- **Lunghezza**: 128 bit
- **Totale indirizzi disponibili**: 3,4×10³⁸ (un numero estremamente grande)
- **Vantaggi**:
  - Nessun bisogno di NAT
  - Supporto nativo per l’autoconfigurazione
  - Più sicurezza integrata (IPsec obbligatorio)
  - Routing più efficiente

### 4. Differenze principali tra IPv4 e IPv6

| *Caratteristica*          |            *IPv4*             |              *IPv6*               |
|:------------------------- |:-----------------------------:|:---------------------------------:|
| Lunghezza                 |            32 bit             |              128 bit              |
| Notazione                 |      Decimale con punti       |     Esadecimale con due punti     |
| Esempio                   |         `192.168.0.1`         | `2001:0db8:85a3::8a2e:0370:7334`  |
| Indirizzi disponibili     |         ~4,3 miliardi         |         ~340 undecilioni          |
| NAT supportato            |              Sì               |          Non necessario           |
| Configurazione automatica |      Limitata (via DHCP)      |      Nativa (SLAAC, DHCPv6)       |
| Sicurezza                 | Facoltativa (IPsec opzionale) |  Obbligatoria (IPsec integrato)   |
| Prestazioni               |        Dipende dal NAT        | Migliore gestione e instradamento |

### 5. Classi IPv4 (per reti private e pubbliche)

| *Classe* |       *Intervallo IP*       |    *Reti private (RFC1918)*     |
| -------- |:---------------------------:|:-------------------------------:|
| A        |  0.0.0.0 – 127.255.255.255  |   `10.0.0.0 – 10.255.255.255`   |
| B        | 128.0.0.0 – 191.255.255.255 |  `172.16.0.0 – 172.31.255.255`  |
| C        | 192.0.0.0 – 223.255.255.255 | `192.168.0.0 – 192.168.255.255` |

### 6. Comandi utili

- **Windows/macOS/Linux**
```
ipconfig 
```
(Windows) – mostra l'indirizzo IP del sistema
  
```
   ip a
```
(Linux/macOS) – per visualizzare configurazioni di rete

- **Test connessione**
  - `ping` – verifica la raggiungibilità di un IP
  - `traceroute` / `tracert` – traccia il percorso verso un IP

### 7. Considerazioni pratiche

- I dispositivi moderni possono avere **sia IPv4 che IPv6** attivi contemporaneamente (dual stack)
- In reti locali, è ancora molto comune utilizzare solo IPv4 per semplicità e compatibilità
- IPv6 è sempre più supportato da ISP e servizi online, ma la sua adozione completa è graduale

>[!info] IN SINTESI:
*IPv4 e IPv6 svolgono la stessa funzione, ma IPv6 è progettato per superare i limiti strutturali e numerici dell’IPv4*. Sebbene IPv6 sia tecnicamente superiore, la transizione globale è ancora in corso, quindi conoscere entrambi è fondamentale.
