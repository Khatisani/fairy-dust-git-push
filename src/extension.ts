import * as vscode from 'vscode';
import * as path from 'path';
import { execFile } from 'child_process';

function playWithFallback(commands: [string, string[]][]) {
  if (commands.length === 0) {
    return;
  }

  const [[cmd, args], ...rest] = commands;
  execFile(cmd, args, (err) => {
    if (err) {
      playWithFallback(rest);
    }
  });
}

function playSound(context: vscode.ExtensionContext) {
  const mp3Path = path.join(context.extensionPath, 'media', 'push.mp3');
  const wavPath = path.join(context.extensionPath, 'media', 'push.wav');

  if (process.platform === 'darwin') {
    execFile('afplay', [mp3Path]);
  } else if (process.platform === 'win32') {
    execFile('powershell', [
      '-c',
      `(New-Object Media.SoundPlayer '${wavPath}').PlaySync()`
    ]);
  } else {
    playWithFallback([
      ['paplay', [wavPath]],
      ['pw-play', [wavPath]],
      ['aplay', ['-q', wavPath]]
    ]);
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