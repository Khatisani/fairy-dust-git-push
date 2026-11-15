import * as vscode from 'vscode';
import * as path from 'path';
import { execFile } from 'child_process';

function playSound(context: vscode.ExtensionContext) {
  const soundPath = path.join(context.extensionPath, 'media', 'push.mp3');

  if (process.platform === 'darwin') {
    execFile('afplay', [soundPath]);
  } else if (process.platform === 'win32') {
    const wavPath = soundPath.replace(/\.mp3$/, '.wav');
    execFile('powershell', [
      '-c',
      `(New-Object Media.SoundPlayer '${wavPath}').PlaySync()`
    ]);
  } else {
    execFile('paplay', [soundPath]);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const terminalListener = vscode.window.onDidEndTerminalShellExecution((event) => {
    const command = event.execution.commandLine.value.trim();

    if (/\bgit\s+push\b/i.test(command) && event.exitCode === 0) {
      playSound(context);
    }
  });

  context.subscriptions.push(terminalListener);
}

export function deactivate() {}