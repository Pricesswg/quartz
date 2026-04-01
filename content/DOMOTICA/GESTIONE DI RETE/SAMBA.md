---
tags:
  - rete
  - server
  - samba
argomento: rete
---

**Samba** è un'implementazione open-source del protocollo **SMB (Server Message Block)**, utilizzato per condividere file, stampanti e risorse in rete locale tra sistemi **Linux, macOS e Windows**.  
Permette l'interoperabilità tra sistemi Unix-like e Windows tramite **SMB/CIFS**.

---

### Come si configura

#### 🪟 Windows (accesso a risorse condivise)
- Apri Esplora file
- Inserisci nella barra: `\\<IP_del_server>` (es. `\\192.168.1.100`)
- Inserisci credenziali se richiesto
- Le cartelle condivise appariranno come unità di rete

#### 🍎 macOS (accesso a risorse condivise)
- Dal Finder: vai su **Vai → Connessione al server...**
- Inserisci: `smb://<IP_del_server>` (es. `smb://192.168.1.100`)
- Autenticati con utente/password (se richiesto)
- La condivisione viene montata come unità

#### 🐧 Linux (accesso a risorse condivise)
- Installa i client SMB (se non già presenti):  
  `sudo apt install cifs-utils`  
- Montaggio temporaneo via terminale:  

```bash
sudo mount -t cifs //192.168.1.100/cartella /mnt/cartella -o username=utente,password=pass
  ```

## **VANTAGGI E SVANTAGGI**

### **✅ Vantaggi**

- Compatibilità multipiattaforma (Linux ↔ Windows ↔ macOS)
- Accesso semplice a file condivisi via rete
- Integrabile con gestione utenti e permessi (ACL)
- Supportato nativamente su OpenMediaVault, NAS, e router avanzati
### **❌ Svantaggi**

- Meno sicuro rispetto a protocolli moderni (es. SFTP) se non configurato correttamente
- Può causare problemi di permessi tra sistemi con gestioni utenti differenti
- Performance inferiori rispetto a protocolli come NFS in ambienti Linux-to-Linux

> [!note] **Nota finale**
> Samba è ideale per ambienti **misti** dove si usano sistemi operativi diversi.
> Per reti solo Linux, **NFS** può essere un’alternativa più performante e semplice da gestire.
