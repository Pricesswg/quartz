---
tags:
  - rete
  - server
  - nfs
argomento: rete
---

**NFS (Network File System)** è un protocollo di condivisione file sviluppato originariamente da Sun Microsystems, pensato per ambienti **Unix/Linux**.

Permette di montare directory remote su client come se fossero locali, tramite rete TCP/IP
## *Come si configura*

### 🐧 Linux (accesso a risorse NFS)

 Installa il client NFS:
```bash
sudo apt install nfs-common`
```
  Montaggio temporaneo via terminale:
```bash
sudo mount -t nfs <IP_server>:/percorso/condiviso /mnt/punto_mount
```
 Per il montaggio automatico, aggiungi la riga al file `/etc/fstab`
### 🍎 macOS (accesso a risorse NFS)
 Apri il terminale e monta con:
```bash
sudo mount -t nfs <IP_server>:/percorso/condiviso /Volumes/cartella
```
Puoi anche usare l'app **Disk Utility** → **File → Monta server NFS...**
### 🪟 Windows (limitato, solo Pro/Enterprise)
Abilita il supporto NFS da:

**Pannello di controllo → Programmi → Attiva/disattiva funzionalità di Windows → Servizi per NFS**

Accedi alla risorsa con:

```cmd
mount \\<IP_server>\percorso X:
```

_Note:_ Il supporto NFS su Windows è **limitato** e può causare problemi di permessi. Meglio usarlo in ambienti solo *nix.
 
## ✅ Vantaggi
- Ottime prestazioni, soprattutto in ambienti **Linux-to-Linux**
- Semplice da configurare nei sistemi Unix-like
- Niente gestione utenti complicata: usa UID/GID del sistema
- Supporta montaggi permanenti e automatizzati (`fstab`, `autofs`)

## ❌ Svantaggi

- **Compatibilità ridotta** con Windows
- **Nessuna autenticazione nativa**: serve rete sicura o combinazione con Kerberos
- Non adatto per ambienti misti o insicuri (es. Wi-Fi pubblici)
- Richiede gestione accurata di UID/GID per evitare problemi di permessi

>[!note] Nota finale
>NFS è perfetto per NAS domestici o professionali in ambienti **Linux/macOS**, dove si richiedono alte prestazioni e integrazione trasparente nel file system.
>In ambienti misti con Windows, **Samba** è più versatile, ma meno performante.

