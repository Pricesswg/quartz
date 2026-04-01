---
tags:
  - domotica
  - zigbee
  - esp32
  - homeassistant
  - mqtt
argomento: progetti DIY
---
## Obiettivo

Realizzare un sensore di presenza basato su radar millimetrico **HLK-LD2410S**, collegato via UART a una schedina **XIAO ESP32-C6**, con invio dei dati tramite protocollo **Zigbee** verso una rete domotica (es. Home Assistant con ZHA o Zigbee2MQTT).

---

## Componenti

- **XIAO ESP32-C6**  
  Microcontrollore compatto con supporto a Zigbee, Wi-Fi e BLE (non simultanei)

- **HLK-LD2410S**  
  Radar mmWave a 3.3V UART per rilevamento presenza e movimento

- Cavi Dupont  
- Alimentazione 5V (USB-C o alimentatore esterno)

## Collegamenti

| HLK-LD2410S | XIAO ESP32-C6 |
|-------------|----------------|
| VCC         | 3V3 (o 5V se supportato dal tuo modulo) |
| GND         | GND            |
| TX          | GPIO6 (RX1)    |
| RX          | GPIO7 (TX1)    |

> Il radar utilizza logica a 3.3V. Verificare la compatibilità della tensione di alimentazione in base alla versione acquistata.

## Ambiente di sviluppo: ESP-IDF con Visual Studio Code

Per sfruttare Zigbee su ESP32-C6 è necessario usare **ESP-IDF**. L’IDE Arduino **non supporta Zigbee**.

### Requisiti

- [Visual Studio Code](https://code.visualstudio.com/)
- Estensione ufficiale **Espressif IDF** per VS Code
- ESP-IDF versione 5.2 o successiva (raccomandato)
- Toolchain, Git, Python (gestiti automaticamente dal wizard dell’estensione)

## Installazione e configurazione

1. **Installa Visual Studio Code**

2. **Installa l’estensione "ESP-IDF"**
   - Apri VS Code
   - Vai in `Estensioni` → cerca `ESP-IDF` → installa
   - Segui il wizard di configurazione
   - Scegli chip: `esp32c6`
   - Seleziona: ESP-IDF v5.2 o più recente

3. **Clona il repository Zigbee ufficiale Espressif**

```bash
git clone --recursive https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/zigbee/occupancy_sensor
```

4. **Imposta il target ESP32-C6 e compila**

```bash
idf.py set-target esp32c6
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

> Sostituisci /dev/ttyUSB0 con la tua porta seriale, che può variare su Windows (es. COMx)

## **Integrazione HLK-LD2410S via UART**
  

Nel file main/app_main.c, configurare l’interfaccia UART e leggere ciclicamente i dati dal radar. Esempio:

```c
#include "driver/uart.h"
#include "zb_zcl_occupancy_sensing.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

#define UART_NUM UART_NUM_1
#define UART_TXD GPIO_NUM_7
#define UART_RXD GPIO_NUM_6

// Funzione semplificata da implementare
bool parse_ld2410(const uint8_t *data, int len) {
    // Inserire qui il parsing del pacchetto HLK-LD2410S
    // Esempio: se distanza > 0 → presenza
    return true; // placeholder
}

void app_main(void)
{
    const uart_config_t uart_config = {
        .baud_rate = 256000,
        .data_bits = UART_DATA_8_BITS,
        .parity    = UART_PARITY_DISABLE,
        .stop_bits = UART_STOP_BITS_1,
        .flow_ctrl = UART_HW_FLOWCTRL_DISABLE
    };

    uart_driver_install(UART_NUM, 2048, 0, 0, NULL, 0);
    uart_param_config(UART_NUM, &uart_config);
    uart_set_pin(UART_NUM, UART_TXD, UART_RXD, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE);

    // Inizializzazione Zigbee (inserita nell'esempio Espressif)

    while (1) {
        uint8_t data[128];
        int len = uart_read_bytes(UART_NUM, data, sizeof(data), pdMS_TO_TICKS(100));
        if (len > 0) {
            bool presenza = parse_ld2410(data, len);
            zb_zcl_occupancy_sensing_report_attr(presenza ? 1 : 0);
        }
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}
```

## **Integrazione con Home Assistant**
 

Dopo il flash del firmware:

- Associare il dispositivo a un coordinatore Zigbee (ZHA, Zigbee2MQTT)
- Il dispositivo verrà rilevato come occupancy sensor
- Verrà aggiornato il cluster Zigbee OccupancySensing (0x0406) con stato Occupied / Unoccupied

## **Estensioni possibili**

- Personalizzazione dei parametri di soglia (es. distanza minima per presenza)
- Esposizione di attributi aggiuntivi (es. distanza via cluster personalizzato)
- Logging su UART per debug avanzato
- Interfaccia di configurazione via cluster Zigbee custom

## **Conclusione**


Questo progetto consente di realizzare un sensore Zigbee di presenza altamente preciso e autonomo. La combinazione tra il radar HLK-LD2410S e l’ESP32-C6, grazie al supporto completo Zigbee di Espressif, offre una soluzione perfettamente integrabile in ecosistemi domotici moderni.