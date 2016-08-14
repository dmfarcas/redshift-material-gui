import { ipcRenderer } from 'electron';

export function toggleRedshift(state) {
  ipcRenderer.send('toggle-redshift', state);
}

export function nightTimeSlider(state) {
  ipcRenderer.send('night-time-slider', state);
}

export function dayTimeSlider(state) {
  ipcRenderer.send('day-time-slider', state);
}

export function sunriseSunset(state) {
  ipcRenderer.send('sunrise-sunset', state);
}
