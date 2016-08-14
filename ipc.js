import { ipcMain } from 'electron';
import { start, stop, kill, preview } from './redshift';
import { setCrons } from './cronjob';
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
}
