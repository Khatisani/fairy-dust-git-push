# Git Push Sound (`vscode-git-push-sound`)

Sprinkle a little magic on every deploy—this VS Code extension plays a magical fairy dust sound effect every time you successfully run `git push` in the integrated terminal.

## Features

- **Automatic Push Detection:** Listens to commands executed in VS Code's built-in terminal via Shell Integration.
- **Success-Only Trigger:** Only plays the chime when `git push` finishes cleanly with exit code `0` (so failed pushes won't celebrate prematurely).
- **Lightweight & Zero-Dependency Playback:** Uses native OS audio playback (`afplay` on macOS, PowerShell `Media.SoundPlayer` on Windows, and `paplay` on Linux).

## Requirements

- Visual Studio Code `^1.93.0`
- **Terminal Shell Integration** enabled in VS Code (`"terminal.integrated.shellIntegration.enabled": true`, enabled by default).
- **Linux users:** `paplay` (PulseAudio utilities) installed on your system.

## Credits

- **Audio:** [Magic Glitter Fairy Dust - Sound Effect (HD)](http://www.youtube.com/watch?v=QMDQck-WbxY) by **Gaming Sound FX**

## Release Notes

### 0.0.1

- Initial release of `vscode-git-push-sound` with magical fairy dust audio playback on successful `git push`.