import {
  TOGGLE_REDSHIFT,
  NIGHTTIME_SLIDER,
  DAYTIME_SLIDER,
  DEFAULT_LOCATION,
  SUNRISE_SUNSET,
  AUTOSTART
} from '../constants/ActionTypes';

import {
  toggleRedshift,
  nightTimeSlider,
  dayTimeSlider,
  sunriseSunset,
  autostart
} from './ipc';

import Moment from 'moment';

const initialState = {
  toggleRedshift: true,
  dayTimeSlider: 6500,
  nightTimeSlider: 2700,
  lastChangedValue: 6500, //I don't think the last changed value should be displayed.
  coords: {
    lat: 0,
    long: 0
  },
  sunriseSunset: {
    sunrise: "6:00:00 AM",
    sunset: "21:00:00 PM"
  },
  isItNight: false,
  autostart: true
};


export default function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REDSHIFT:
      const toggleRedshift = !state.toggleRedshift;
      // toggleRedshift(toggle);
      return Object.assign({}, state, {
        toggleRedshift: toggleRedshift,
      });

    case DAYTIME_SLIDER:
      dayTimeSlider(action.value);
      return Object.assign({}, state, {
        dayTimeSlider: action.value,
        lastChangedValue: action.value
      });

    case DEFAULT_LOCATION:
      return Object.assign({}, state, {
        coords: {
          lat: action.value.lat,
          long: action.value.long
        }
      });


    case SUNRISE_SUNSET:
      sunriseSunset({
          sunrise: Moment(action.value.sunrise, "h:mm:ss A").unix(),
          sunset: Moment(action.value.sunset, "h:mm:ss A").unix()
      });
      return Object.assign({}, state, {
        sunriseSunset: {
          sunrise: action.value.sunrise,
          sunset: action.value.sunset
        }
      });

    case NIGHTTIME_SLIDER:
      nightTimeSlider(action.value);
      return Object.assign({}, state, {
        nightTimeSlider: action.value,
        lastChangedValue: action.value
      });


    case AUTOSTART:
      const toggleAutostart = !state.autostart;
      autostart(toggleAutostart);
      return Object.assign({}, state, {
        autostart: toggleAutostart,
      });


    default:
      return state;
  }
}
