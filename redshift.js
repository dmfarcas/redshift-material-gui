import { exec } from 'child_process';
import { log, info, err } from './logger';


const redshift = (() => {
  const start = function starting() {
    info("Starting");
    exec('redshift -t 2548K:6874K', errorHandler);
  };

  const stop = function stopping() {
    info("Stopping Redshift using '-x' flag.");
    exec('redshift -x', errorHandler);
  };

  const kill = function killing() {
    info("Killing Redshift process.");

    exec('pkill redshift', errorHandler);
  };

  const preview = function previewing(setting) {
    info(`Previewing with the following settings: ${setting}`);
    exec(`redshift -O ${setting}`, errorHandler);
  };


  return {
    start: start,
    stop: stop,
    kill: kill,
    preview: preview
  };
})();

function errorHandler(error) {
  if(error) {
    err(error);
  }
}

export default redshift;
