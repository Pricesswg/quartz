---
tags:
  - rete
  - docker
  - container
  - server
argomento: rete
---


Un **container** è un’unità software leggera, portabile e autosufficiente che include tutto il necessario per eseguire un'applicazione: codice, runtime, librerie, variabili di ambiente e file di configurazione. A differenza delle **macchine virtuali**, i container condividono il kernel del sistema operativo host, risultando molto più efficienti in termini di risorse.

I container sono gestiti da un **container engine**, il più noto dei quali è **Docker**, ma esistono anche alternative come Podman, containerd e LXC.

### Caratteristiche principali

- **Isolamento a livello di processo**: ogni container gira come un processo isolato ma condivide il kernel dell’host.
- **Leggerezza**: a differenza delle VM, i container non contengono un intero sistema operativo, il che riduce drasticamente dimensioni e tempi di avvio.
- **Immagini immutabili**: i container si basano su immagini definite in file (es. `Dockerfile`) che garantiscono coerenza tra ambienti.
- **Portabilità**: è possibile eseguire lo stesso container su diversi sistemi (Linux, Windows, cloud, ecc.) senza modifiche.
- **Scalabilità**: perfetti per applicazioni distribuite e scalabili, anche in ambienti orchestrati (es. Kubernetes).

### Utilizzi comuni

- **Microservizi**: divisione delle applicazioni in unità indipendenti e facilmente scalabili.
- **Continuous Integration/Deployment (CI/CD)**: ambienti standard per testing e rilascio.
- **Esecuzione multipiattaforma**: esecuzione di software su sistemi diversi senza dipendenze locali.
- **Ambienti di sviluppo replicabili**: stessi container su ogni macchina per evitare problemi di “funziona solo sul mio PC”.

### Differenze rispetto alle VM

| Aspetto              | Virtual Machine                    | Container                         |
|----------------------|------------------------------------|------------------------------------|
| Isolamento           | Completo, anche a livello di kernel | Parziale, condivisione del kernel  |
| Avvio                | Lento (minuti)                     | Veloce (secondi)                   |
| Dimensioni           | Centinaia di MB o GB               | Decine di MB                      |
| Portabilità          | Limitata                           | Alta                               |
| Efficienza           | Minore (emulazione hardware)       | Maggiore (uso diretto del sistema) |
