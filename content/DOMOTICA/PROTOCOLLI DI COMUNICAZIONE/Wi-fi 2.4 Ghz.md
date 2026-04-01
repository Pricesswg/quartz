---
tags:
  - protocolli
  - rete
  - wifi
  - homeassistant
argomento: protocolli di rete
---
Il Wi-Fi è un protocollo di comunicazione wireless ampiamente utilizzato per connettere dispositivi alla rete domestica e a Internet. In ambito domotico, il Wi-Fi è spesso sfruttato per collegare dispositivi smart direttamente al router, **senza richiedere hub o bridge dedicati**.

È il protocollo più comune nei dispositivi economici o di facile installazione come prese smart, lampadine Wi-Fi, interruttori, videocamere e sensori.

## Caratteristiche principali

- **Banda di frequenza**: 2.4 GHz (più comune), 5 GHz (meno usata in domotica).  
- **Connettività diretta**: ogni dispositivo si connette direttamente al router.  
- **Velocità**: alta, adatta anche per streaming video o audio.  
- **Compatibilità**: ampia, supportata da smartphone, router e cloud.  
- **Latenza**: generalmente bassa, ma dipende dal carico di rete.  
- **Consumo energetico**: elevato rispetto a Zigbee/Z-Wave (non adatto a sensori a batteria).

## Wi-Fi vs altri protocolli

| Caratteristica        | Wi-Fi                          | Zigbee/Z-Wave               |
|------------------------|--------------------------------|-----------------------------|
| Gateway necessario     | No                             | Sì                          |
| Copertura              | Limitata dal router            | Espandibile con rete mesh   |
| Consumo energetico     | Alto                           | Molto basso                 |
| Latenza                | Bassa, ma soggetta a congestione | Molto bassa e stabile     |
| Interferenze           | Elevate (stessa banda del Wi-Fi stesso) | Minime               |
| Sicurezza              | WPA2 / WPA3                    | Crittografia AES-128        |

## Come funziona una rete domotica Wi-Fi

Ogni dispositivo Wi-Fi si collega al router e comunica con un server cloud o con un controller locale come **Home Assistant**. La rete domestica si riempie rapidamente se si usano troppi dispositivi Wi-Fi, generando problemi di congestione o disconnessioni.

### Architettura tipica:

[ Smartphone ]
	↓
[ Router Wi-Fi ]
	↓            
[ Home Assistant ] <— automazioni locali
	↓  
[ Dispositivo Wi-Fi 1 ]
	↓  
[ Dispositivo Wi-Fi 2 ]

## **Integrazione con Home Assistant**

Home Assistant può controllare dispositivi Wi-Fi in vari modi:

- **Localmente** tramite protocolli aperti (es. MQTT, ESPHome, Tasmota).
- **Via cloud** tramite integrazioni ufficiali o custom (es. Tuya, eWeLink, Meross).
- Alcuni dispositivi richiedono hack del firmware per l’uso locale (es. flash Tasmota su Sonoff).

Esempio di dispositivo con firmware Tasmota:

```yaml
switch:
  - platform: mqtt
    name: "Presa Tasmota"
    state_topic: "stat/sonoff/POWER"
    command_topic: "cmnd/sonoff/POWER"
    qos: 1
    payload_on: "ON"
    payload_off: "OFF"
```

## **Vantaggi**

- Facilità di installazione (nessun hub richiesto).
- Compatibilità ampia con router e app smartphone.
- Alte prestazioni per dispositivi video (telecamere, citofoni).
- Dispositivi economici facilmente reperibili.
## **Svantaggi**

- Affidabilità limitata in presenza di molti dispositivi.
- Consumo energetico elevato (non adatto per sensori a batteria).
- Dipendenza dal cloud per molti dispositivi commerciali.
- Possibili problemi di congestione o saturazione del router.
## **Quando scegliere dispositivi Wi-Fi?**

Il Wi-Fi è una scelta valida quando:

- Si ha una rete stabile e ben dimensionata.
- Si usano pochi dispositivi smart.
- Si vogliono evitare hub o gateway aggiuntivi.
- Si lavora con automazioni locali tramite MQTT/ESPHome.
- Si integrano videocamere o dispositivi ad alto consumo.

>[!tip] CONSIDERAZIONI FINALI
>Il Wi-Fi rappresenta una soluzione semplice e potente per iniziare con la domotica, soprattutto per installazioni limitate o per dispositivi che richiedono alta banda. Tuttavia, per reti molto estese o per sensori a batteria, è consigliabile affiancarlo a Zigbee o Z-Wave.