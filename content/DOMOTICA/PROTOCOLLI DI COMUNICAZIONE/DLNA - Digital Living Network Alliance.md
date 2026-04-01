---
tags:
  - protocolli
  - rete
  - streaming
argomento: protocolli di rete
---
Il **DLNA (Digital Living Network Alliance)** è un protocollo di comunicazione standardizzato progettato per facilitare lo *streaming multimediale* tra dispositivi compatibili all'interno della stessa rete locale. Sviluppato nel 2003, è pensato per rendere possibile la condivisione di contenuti multimediali — come video, musica e immagini — tra dispositivi di produttori diversi, senza necessità di configurazioni complesse.

### Come funziona

DLNA utilizza protocolli come **UPnP AV (Universal Plug and Play Audio/Video)** per individuare e comunicare tra i dispositivi sulla rete. I dispositivi DLNA vengono classificati in tre categorie principali:

- **Digital Media Server (DMS)**: Fornisce i contenuti (es. un NAS, un PC con software come Plex, Jellyfin, o un Raspberry Pi con MiniDLNA).
- **Digital Media Player (DMP)**: Riceve e riproduce i contenuti (es. smart TV, lettori Blu-ray, console di gioco).
- **Digital Media Controller (DMC)**: Controlla lo streaming da un server a un lettore (es. un'app per smartphone).
  
Altri ruoli possono includere i **Digital Media Renderer (DMR)** e **Digital Media Printer (DMPr)**, anche se meno comuni in contesti domestici.

### Utilizzi tipici in ambito domotico e home server

- **Media Server in rete locale**: Un Raspberry Pi o un NAS con DLNA può fungere da server multimediale, permettendo a smart TV, tablet e altri dispositivi di riprodurre contenuti archiviati in rete.
- **Automazioni con Home Assistant**: Anche se DLNA non supporta direttamente MQTT o API RESTful moderne, alcuni componenti di Home Assistant possono scansionare e inviare comandi a dispositivi compatibili (es. accensione TV, cambio sorgente, riproduzione contenuti).
- **Compatibilità cross-device**: Utile in ambienti misti con dispositivi Android, Windows, Linux, Smart TV e vecchi sistemi che non supportano le app moderne (Plex, Kodi, ecc.).

### Vantaggi

- Non richiede app proprietarie.
- Compatibilità nativa con molti dispositivi (soprattutto Smart TV).
- Ideale per ambienti a bassa complessità o reti locali chiuse.

### Svantaggi

- **Protocollo datato**: supporta solo file system e formati compatibili, spesso limitato in codec (es. nessun supporto per H.265/HEVC su molti dispositivi).
- **Sicurezza**: non supporta crittografia o autenticazione.
- **Nessun accesso remoto nativo**: funziona solo in LAN, non è adatto per lo streaming remoto.
- Non supporta playlist dinamiche o funzioni avanzate come transcodifica in tempo reale.

### Alternative moderne

- **Plex / Jellyfin / Emby**: offrono funzionalità simili ma con interfacce moderne, gestione utenti, transcodifica e accesso remoto.
- **Kodi**: può agire sia da player DLNA che da server, con ampie possibilità di personalizzazione.


> [!warning] Conclusione
>
>DLNA resta utile per scenari semplici o per massimizzare la compatibilità con dispositivi  legacy. Tuttavia, per progetti di domotica evoluta o media center avanzati, è consigliabile  affiancarlo o sostituirlo con soluzioni più moderne e sicure.