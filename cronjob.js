import crontab from 'node-crontab';
import { set } from './redshift'
export function setCrons(data) {

  let { sunrise, sunset } = data;

  sunset = "07 17";

  let sunrisetCron = crontab.scheduleJob(`${sunrise} * * *`, () => {
    set(6500);
  });
  console.log(`${sunset} * * *`)

  let sunsetCron = crontab.scheduleJob(`${sunset} * * *`, () => {
    console.log(`${sunset} * * *`)
    set(2700);
  });
  }
