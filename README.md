# Fairy Dust: Git Push Sound (`fairy-dust-git-push`)

Sprinkle a little magic on every deploy—this VS Code extension plays a magical fairy dust sound effect every time you successfully run `git push` in the integrated terminal.

## Features

- **Automatic Push Detection:** Listens to commands executed in VS Code's built-in terminal via Shell Integration.
- **Success-Only Trigger:** Only plays the chime when `git push` finishes cleanly with exit code `0` (so failed pushes won't celebrate prematurely).
- **Lightweight & Zero-Dependency Playback:** Uses native OS audio playback (`afplay` on macOS, PowerShell `Media.SoundPlayer` on Windows, and `paplay` on Linux).

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/khatisani.fairy-dust-git-push?style=for-the-badge&color=ff69b4&label=VS%20Code%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=khatisani.fairy-dust-git-push)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/khatisani.fairy-dust-git-push?style=for-the-badge&color=ffb6c1)](https://marketplace.visualstudio.com/items?itemName=khatisani.fairy-dust-git-push)

**[Install from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=khatisani.fairy-dust-git-push)**

## Installation

1. Open the **Extensions** view in VS Code (`Cmd+Shift+X` on macOS or `Ctrl+Shift+X` on Windows/Linux).
2. Search for **`Fairy Dust: Git Push Sound`** (or `khatisani.fairy-dust-git-push`).
3. Click **Install**.

## Requirements

- Visual Studio Code `^1.93.0`
- **Terminal Shell Integration** enabled in VS Code (`"terminal.integrated.shellIntegration.enabled": true`, enabled by default).
- **Linux users:** `paplay` (PulseAudio utilities) installed on your system.

## Credits

- **Audio:** [Fairy Dust Magic Sound Effect](https://www.youtube.com/watch?v=NeFR0_u4p5I) by **The Audio Horizon SFX**

## Release Notes

### 0.0.2

- Updated extension display name to **Fairy Dust: Git Push Sound**.
- Updated bundled fairy dust audio clip and Marketplace icon.

### 0.0.1

- Initial release of `fairy-dust-git-push` with magical fairy dust audio playback on successful `git push`.