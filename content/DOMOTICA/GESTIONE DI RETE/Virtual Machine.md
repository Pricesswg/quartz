---
tags:
  - rete
  - server
  - virtualmachine
argomento: rete
---

Una **Virtual Machine (VM)** è un ambiente software che emula un computer fisico, consentendo l’esecuzione di un sistema operativo e delle relative applicazioni in modo isolato dal sistema host.

Le VM vengono eseguite su un **hypervisor**, un livello software (o firmware) che gestisce l’hardware fisico e consente di creare ed eseguire più macchine virtuali sullo stesso host. Esistono due tipi principali di hypervisor:

- **Tipo 1 (bare-metal)**: si esegue direttamente sull’hardware fisico (es. VMware ESXi, Microsoft Hyper-V, Xen).
- **Tipo 2 (hosted)**: si esegue sopra un sistema operativo esistente (es. VirtualBox, VMware Workstation, Parallels Desktop).
### Caratteristiche principali

- **Isolamento**: ogni VM è indipendente dalle altre e dal sistema host.
- **Snapshot**: è possibile salvare lo stato della VM e ripristinarlo in qualsiasi momento.
- **Portabilità**: una VM può essere esportata e spostata su altri host compatibili.
- **Multipiattaforma**: è possibile eseguire sistemi operativi diversi sullo stesso hardware (es. Windows su Linux, Linux su macOS).
### Utilizzi comuni

- **Test e sviluppo**: ambienti separati per evitare modifiche al sistema principale.
- **Server virtualizzati**: hosting di più server su un singolo hardware fisico.
- **Sicurezza**: esecuzione di software potenzialmente pericoloso in ambienti isolati.
- **Formazione**: simulazione di reti o sistemi per scopi didattici.
### Differenze con i container*

A differenza dei **container** (es. Docker), che condividono il kernel del sistema host e sono più leggeri, le VM includono un intero sistema operativo virtualizzato, risultando più pesanti ma anche più isolate e flessibili.