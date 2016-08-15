import * as types from '../constants/ActionTypes';

export function toggleRedshift() {
  return { type: types.TOGGLE_REDSHIFT };
}

export function dayTimeSlider(event, value) {
  return {
      type: types.DAYTIME_SLIDER,
      value
  };
}

export function nightTimeSlider(event, value) {
  return {
      type: types.NIGHTTIME_SLIDER,
      value
  };
}

export function defaultLocation(coords) {
  return {
    type: types.DEFAULT_LOCATION,
    value: {
      lat: coords[0],
      long: coords[1]
    }
  };
}

export function sunriseSunset(sunriseSunsetData) {
  return {
    type: types.SUNRISE_SUNSET,
    value: {
      sunrise: sunriseSunsetData.sunrise,
      sunset: sunriseSunsetData.sunset
    }
  };
}


export function autostart(event, value) {
  return {
    type: types.AUTOSTART,
    value
  };
}
