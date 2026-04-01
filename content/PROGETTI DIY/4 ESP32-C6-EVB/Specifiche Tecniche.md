---
tags:
  - domotica
  - zigbee
  - esphome
  - esp32-c6
  - homeassistant
argomento: progetti DIY
---

![[2024-06-18T10_15_12.498Z-ESP32-C6-ICBBUY-COM.jpg]]
Specifiche: https://wiki.icbbuy.com/doku.php?id=developmentboard:esp32-c6-evb



```yaml

 esphome:
    min_version: "2025.4"
    name: esp32-c6-evb
    friendly_name: ESP32 C6 EVB
    project:
      name: mfornander.esp32c6evb
      version: "1.0"

  esp32:
    board: esp32-c6-devkitc-1
    variant: esp32c6
    flash_size: 4MB
    framework:
      type: esp-idf
      version: 5.3.1
      platform_version: 6.9.0
      sdkconfig_options:
        CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y
        CONFIG_BT_BLE_50_FEATURES_SUPPORTED: y
        CONFIG_BT_BLE_42_FEATURES_SUPPORTED: y
        CONFIG_OPENTHREAD_ENABLED: n
        CONFIG_ENABLE_WIFI_STATION: y
        CONFIG_USE_MINIMAL_MDNS: y

  # Enable logging
  logger:

  # Enable Home Assistant API
  api:
    password: ""

  ota:
    - platform: esphome
      password: ""

  wifi:
    ssid: !secret wifi_ssid
    password: !secret wifi_password

    # Enable fallback hotspot (captive portal) in case wifi connection fails
    ap:
      ssid: "ESP32-C6-EVB Fallback Hotspot"
      password: "12345678"

  captive_portal:

  # https://wiki.icbbuy.com/doku.php?id=developmentboard:esp32-c6-evb

  esp32_ble_tracker:
    id: ble_tracker
    max_connections: 5
    scan_parameters:
      interval: 1100ms
      window: 1100ms
      active: true
      continuous: false

  bluetooth_proxy:
    active: true
    connection_slots: 5

  sensor:
    - platform: wifi_signal
      name: Wi-Fi Signal
      update_interval: 60s

  # I2C crashes with the esp-idf version needed for BT but only exposed on the UEXT pins anyway
  # i2c:
  #   sda: 6
  #   scl: 7
  #   frequency: 15kHz

  light:
    - platform: status_led
      name: Status LED
      id: led
      pin:
        number: 8
        inverted: true
        ignore_strapping_warning: true
        mode: output

  binary_sensor:
    - platform: gpio
      name: BOOT Button
      id: boot
      pin:
        number: 9
        inverted: true
        ignore_strapping_warning: true
        mode:
          input: true
          pullup: true
          
    
    - platform: gpio
      name: Input 1
      id: in1
      pin:
        number: 1
        inverted: true
        mode:
          input: true
          pullup: true
    - platform: gpio
      name: Input 2
      id: in2
      pin:
        number: 2
        inverted: true
        mode:
          input: true
          pullup: true
    - platform: gpio
      name: Input 3
      id: in3
      pin:
        number: 3
        inverted: true
        mode:
          input: true
          pullup: true
    - platform: gpio
      name: Input 4
      id: in4
      pin:
        number: 4
        inverted: true
        mode:
          input: true
          pullup: true

  switch:
    - platform: restart
      name: Restart
    - platform: gpio
      name: Relay 1
      id: out1
      pin: 10
    - platform: gpio
      name: Relay 2
      id: out2
      pin: 11
    - platform: gpio
      name: Relay 3
      id: out3
      pin: 22
    - platform: gpio
      name: Relay 4
      id: out4
      pin: 23

```


FILE .c COMPILATO PER ZIGBEE CON 4 RELE DI PILOTAGGIO

```c
/*
 * Zigbee HA_on_off_switch - 4 relè su ESP32-C6-EVB iCBbuy
 * Espone 4 endpoint Zigbee On/Off, uno per ciascun GPIO relè
 */

#include "esp_check.h"
#include "esp_err.h"
#include "string.h"
#include "nvs_flash.h"
#include "esp_log.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "esp_zb_switch.h"

#define SWITCH_ENDPOINTS_NUM  4

static const uint8_t endpoint_list[SWITCH_ENDPOINTS_NUM] = {10, 11, 12, 13};
static const gpio_num_t relay_gpio_list[SWITCH_ENDPOINTS_NUM] = {
    GPIO_NUM_10, GPIO_NUM_11, GPIO_NUM_22, GPIO_NUM_23
};

static const char *TAG = "ESP_ZB_MULTI_RELAY";

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status   = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;

    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Device startup complete (%s)", esp_zb_bdb_is_factory_new() ? "factory new" : "reboot");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Starting network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Opening network for joining");
                esp_zb_bdb_open_network(180);
            }
        } else {
            ESP_LOGW(TAG, "Startup failed: %s", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)esp_zb_bdb_start_top_level_commissioning,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
        }
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            bool join_enabled = *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p);
            ESP_LOGI(TAG, "Joining %s", join_enabled ? "enabled" : "disabled");
        }
        break;
    default:
        ESP_LOGI(TAG, "Signal received: %s (0x%x), status: %s",
                 esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static void esp_zb_task(void *pvParameters)
{
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZC_CONFIG();
    esp_zb_init(&zb_nwk_cfg);

    esp_zb_ep_list_t *device_ep_list = NULL;

    for (int i = 0; i < SWITCH_ENDPOINTS_NUM; i++) {
        esp_zb_on_off_switch_cfg_t switch_cfg = ESP_ZB_DEFAULT_ON_OFF_SWITCH_CONFIG();
        switch_cfg.power_on_gpio.pin = relay_gpio_list[i];

        esp_zb_ep_list_t *ep = esp_zb_on_off_switch_ep_create(endpoint_list[i], &switch_cfg);

        zcl_basic_manufacturer_info_t info = {
            .manufacturer_name = ESP_MANUFACTURER_NAME,
            .model_identifier = ESP_MODEL_IDENTIFIER,
        };

        esp_zcl_utility_add_ep_basic_manufacturer_info(ep, endpoint_list[i], &info);

        if (device_ep_list == NULL) {
            device_ep_list = ep;
        } else {
            esp_zb_ep_list_add(device_ep_list, ep);
        }
    }

    esp_zb_device_register(device_ep_list);

    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}

void app_main(void)
{
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config  = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };

    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));

    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}

```