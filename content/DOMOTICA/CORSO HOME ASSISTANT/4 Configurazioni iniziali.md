---
title: Configurazioni iniziali
argomento: domotica corso
tags:
  - domotica
  - corso
  - mqtt
  - zigbee
  - zwave
  - matter
  - wifi
  - homeassistant
  - googlehome
  - alexa
  - homekit
  - rete
  - virtualmachine
  - docker
  - container
---

## **Il primo avvio

Se avremo seguito tutti i passaggi del capitolo precedente, ora il nostro Home Assistant è pronto per essere utilizzato. Dopo aver acceso la macchina, sarà possibile accedere alla nostra installazione tramite un qualunque browser Web da qualunque altra macchina presente sulla rete[^1].

Basterà digitare nella barra di ricerca di un qualunque browser web l'indirizzo *http://homeassistant.local:8123* per accedere alla pagina relativa alla nostra installazione e continuare i passaggi di configurazione che vedremo ora in dettaglio.

> [!tip] Quale browser usare
> Potete utilizzare qualsiasi browser web che utilizzate di solito, fate solo attenzione che la cache locale in alcuni casi non viene cancellata regolarmente, quindi rischiate di non vedere le modifiche che effettuate!  Io ho verificato il funzionamento corretto su Firefox, Chrome e Safari, ma come dicevo prima, fate attenzione a Firefox che non svuota automaticamente la cache di sistema.


[^1]: E' possibile accedere solamente tramite un altro dispositivo in quanto Home Assistant è stato pensato come hub senza interfaccia grafica. Se connettete un monitor direttamente al vostro Raspberry infatti, noterete che al posto dell'interfaccia grafica avrete accesso al terminale di controllo.
