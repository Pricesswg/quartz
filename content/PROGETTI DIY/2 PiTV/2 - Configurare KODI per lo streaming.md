---
tags:
  - raspberry
  - pitv
  - rete
  - linux
  - dlna
  - samba
argomento: progetti DIY
---

Dopo aver installato il stro sistema operativo, sarà necessario installare alcuini applicativi per far funzionare al 100% il nostro sistema operativo.

> !note] NOTA
> per comodità, dato che dovremo scrivere parecchio durante la nostra guida, sarà necessario avere una tastiera connessa al nostro raspberry, in modo da poter digitare il tutto velocemente senza dover utilizzare il telecomando del televisore.

## Impostare la lingua in italiano

Per prima cosa possiamo andare a cambiare la lingua di KODI, selezionando la rotella posta nella parte centrale dell'interfaccia (SETTINGS) e poi selezionare la cove *INTERFACE* poi *REGIONALE*, *LANGUAGE* e poi selezionare la voce italiano. Dopo una breve installazione il sistema sarà tradotto in italiano.

![[Kodi-interface.jpg]]
## Aggiungere i canali del digitale terrestre

Sempre dal menù *impostazioni* dovremo selezionare la voce *FILE* --> *Aggiugni sorgente*, a questo punto selezioniamo la voce **NESSUNO** che si presente nel menù centrale e dovremo inserire nel campo che comparirà questo url:

```
https://worldlivetv.github.io/repo/
```

![[Kodi-Nessuno.jpg]]

Poi premiamo **OK** e diamo come nome **KLTV**.
Torniamo sotto Sistema e selezioniamo la voce **ADDON** --> **Installa da file .zip**

> [!warning] Attenzione
> Se compare una nota di sicurezza, basterà cliccare sulla voce **Impostazioni** e dal menù che compare spuntare la voce **Sorgenti Sconosciute**, premendo successivamente **Si** sulla voce del messaggio di avvertimento che comparirà.


![[Kodi-Seleziona-KLTV.jpg]]

A questo punto si seleziona di nuovo la voce *Installa da file ZIP* e selezioniamo la voce **KLTV** dall'elenco che compare. Apparirà un nuovo menù, anche in questo caso bisogna selezionare la voce *Installa da file ZIP*
Torniamo di nuovo indietro alla schermata **ADDON** e selezioniamo la voce *Installa da Repository* e continuiamo selezionando la voce **WorldLiveTV Repository > Add-On Video > World Live TV Helper**.

![[Kodi-Installa-da-repository.jpg]]

![[Kodi-Seleziona-WorldLiveTV.jpg]]

e completiamo la procedura selezionando la voce **ISNTALLA**

![[Kodi-Installa-WorldLiveTV.jpg]]


Ora andiamo alla **Schermata Principale di Kodi**, sulla scheda **Add-On** e clicchiamo su **World Live TV Helper**, e poi **seleziona lista**. Ci verrà richiesto di installare il plugin **PVR IPTV**, accettiamo e continuiamo.
A questo punto basterà selezionare la *lista FTA* nell'elenco che si presenterà e selezionarla. A questo punto sembrerà che il sistema si è piantato, ma sta solamente importando i file di configurazione. al termine della procedura potremo trovare i nostri canali all'interno del menù principale e la nostra **PiTV** sarà pronta all'uso.

![[Kodi-Canali-dalla-scheda-TV.jpg]]

A questo punto potremo lasciare il nostro dispositivo connesso e vedere la televisione su qualunque dispositivo presente sulla rete.

> [!faq]- AGGIUNGERE IL PLUGIN DI HOME ASSISTANT
> Se volessimo utilizzare Kodi da Home Assistant dovremo installare il suo plugin dedicato nella sezione *AddOn --> Libreria Kodi --> AddOn programmi --> Home Assistant Plugin* e configurarlo successivamente.