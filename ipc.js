import { ipcMain } from 'electron';
import { start, stop, kill, preview } from './redshift';
import { setCrons } from './cronjob';
import { autostart } from './autostart';

export function events() {
  ipcMain.on('toggle-redshift', (event, state) => {
    if (state) {
      start();
    } else {
      stop();
    }
  });

  ipcMain.on('day-time-slider', (event, setting) => {
    preview(setting);
  });

  ipcMain.on('night-time-slider', (event, setting) => {
    preview(setting);
  });

  ipcMain.on('sunrise-sunset', (event, setting) => {
    setCrons(setting);
  });

  ipcMain.on('autostart', (event, setting) => {
    autostart(setting, (err) => {
      if (err) console.log(err);
    });
  });
}
