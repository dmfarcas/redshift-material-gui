import {
  TOGGLE_REDSHIFT,
  NIGHTTIME_SLIDER,
  DAYTIME_SLIDER,
  DEFAULT_LOCATION,
  SUNRISE_SUNSET
} from '../constants/ActionTypes';

import {
  toggleRedshift,
  nightTimeSlider,
  dayTimeSlider
} from './ipc';

const initialState = {
  toggleRedshift: true,
  dayTimeSlider: 98,
  nightTimeSlider: 1,
  coords: {
    lat: 0,
    long: 0
  },
  sunriseSunset: {
    sunrise: "6:00:00 AM",
    sunset: "21:00:00 PM"
  }
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REDSHIFT:
      const toggle = !state.toggleRedshift;
      // TODO: I'll have to remember if we are in day or night time. Interesting cases.
      // Location service first.
      // toggleRedshift(toggle);
      return Object.assign({}, state, {
        toggleRedshift: toggle,
      });

    case DAYTIME_SLIDER:
      dayTimeSlider(action.value);
      return Object.assign({}, state, {
        dayTimeSlider: action.value,
      });

    case DEFAULT_LOCATION:
      return Object.assign({}, state, {
        coords: {
          lat: action.value.lat,
          long: action.value.long
        }
      });


    case SUNRISE_SUNSET:
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
      });

    default:
      return state;
  }
}
