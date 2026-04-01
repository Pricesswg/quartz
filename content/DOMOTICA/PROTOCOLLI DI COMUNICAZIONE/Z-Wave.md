---
tags:
  - domotica
  - protocolli
  - zwave
  - homeassistant
argomento: protocolli di rete
---
## Cos'è Z-Wave?

Z-Wave è un protocollo di comunicazione wireless progettato specificamente per la domotica. È stato sviluppato originariamente da Zensys (ora parte di Silicon Labs) e si basa su una **rete mesh a basso consumo** energetico che utilizza frequenze radio non congestionate, differenti dal Wi-Fi o Bluetooth.

Il protocollo è stato creato per garantire **affidabilità, interoperabilità e bassissima latenza** nei comandi tra dispositivi smart come luci, serrature, termostati, prese intelligenti e sensori.

## Caratteristiche principali

- **Frequenza radio**: varia da paese a paese (es. 868.42 MHz in Europa, 908.42 MHz negli USA).  
- **Rete mesh**: ogni dispositivo alimentato dalla rete elettrica agisce come ripetitore per estendere la copertura.  
- **Limite di dispositivi**: fino a 232 dispositivi per controller Z-Wave tradizionale (versioni più recenti come Z-Wave Long Range supportano migliaia di nodi).  
- **Bassa latenza**: risposta rapida ai comandi, spesso inferiore a 100 ms.  
- **Sicurezza**: supporta crittografia AES-128 (S2 Security).

## Z-Wave vs Zigbee

| **Caratteristica**  | **Z-Wave**                   | **Zigbee**                   |
| ------------------- | ---------------------------- | ---------------------------- |
| Banda di frequenza  | 868 MHz (UE) / 908 MHz (USA) | 2.4 GHz (globale)            |
| Interferenze Wi-Fi  | Minime                       | Possibili                    |
| Portata             | ~100 m line-of-sight         | ~10-20 m indoor              |
| Nodi massimi (base) | 232                          | > 65.000                     |
| Interoperabilità    | Alta (certificazione Z-Wave) | Variabile (a seconda vendor) |
| Energia (sensori)   | Molto bassa                  | Bassa                        |

## Come funziona una rete Z-Wave

Una rete Z-Wave è composta da:

- **Controller primario**: è il cervello della rete (es. chiavetta USB Z-Wave su Home Assistant, hub domotico).
- **Dispositivi "end device"**: sensori, attuatori, interruttori.
- **Router Z-Wave**: dispositivi alimentati (non a batteria) che rilanciano il segnale e migliorano la copertura.

Tutti i dispositivi comunicano usando **messaggi hopping**, permettendo una copertura anche in case grandi, purché vi siano dispositivi alimentati per fare da ponte.

---

## **Integrazione con Home Assistant**

Home Assistant supporta Z-Wave tramite componenti come:

- **Z-Wave JS** (raccomandato): moderno, aggiornato e ben supportato.
- Richiede una **chiavetta USB compatibile**, es. Aeotec Z-Stick Gen5+, Zooz, ecc.
- Le entità vengono rilevate automaticamente e sono controllabili come qualsiasi altro dispositivo.

Esempio di configurazione base con Z-Wave JS:

```yaml
z-wave-js:
  usb_path: /dev/ttyUSB0
  network_key: "0x01, 0x02, 0x03, 0x04, ..."

```
---

## **Vantaggi**

- Ottima portata e affidabilità anche in ambienti con molte pareti.
- Rete stabile nel tempo.
- Minime interferenze.
- Supporto per reti sicure con crittografia.

## **Svantaggi**

- Frequenze diverse per ogni regione (i dispositivi devono essere certificati per l’area geografica).
- Meno dispositivi compatibili rispetto a Zigbee.
- Costo medio superiore.
- La rete supporta meno nodi rispetto a Zigbee.

## **Quando scegliere Z-Wave?**


Z-Wave è ideale quando:

- Si vuole evitare interferenze con Wi-Fi.
- Si cerca una rete affidabile e stabile.
- Si ha un numero contenuto di dispositivi.
- Si vogliono usare prodotti di fascia alta certificati.

  
> [!tip] NOTE FINALI
> Z-Wave resta una delle tecnologie più affidabili per la domotica residenziale. L’integrazione con Home Assistant è matura e stabile, e permette un controllo preciso e sicuro di tutti i dispositivi certificati.