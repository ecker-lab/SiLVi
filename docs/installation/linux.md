---
title: Linux
parent: Installation
nav_order: 3
---

# Linux
Linux installers are available for Debian- and RPM-based distributions on both x64 and ARM architectures.

## Debian-Based Distributions
For Ubuntu and other Debian-based Linux distributions, download the deb file compatible with your computer architecture. 

<div class="alert alert-info d-flex align-items-baseline" role="alert">
<i class="bi bi-info-circle-fill fs-5"></i> <div class="ms-2 small">Run <code>arch</code> or <code>uname -m</code> to confirm your architecture. For example, if the output is <span class="badge text-bg-dark">x86_64</span>, it means you have a 64-bit Intel/AMD-based system. Similarly, if the output is <span class="badge text-bg-dark">aarch64</span>, you have a 64-bit ARM-based system.</div></div>

On Ubuntu, if GNOME Software has already been installed, you can simply double click on the file to install it. Alternatively, you can execute the following command:

```sudo apt install $PATH_TO_DEB_FILE```

<!-- To uninstall the app, execute:

```sudo apt remove silvi``` -->

## RPM-Based Distributions
On RPM-based systems, you can install SiLVi with dnf:

```sudo dnf install $PATH_TO_RPM_FILE```

<div class="alert alert-warning d-flex align-items-baseline" role="alert"><i class="bi bi-exclamation-circle-fill fs-5"></i><div class="ms-2 small"></div>The Linux version has been briefly tested only on Ubuntu 24.04 LTS so far.</div>

