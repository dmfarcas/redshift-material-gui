import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';


export default class TemperatureControl extends Component {

  static propTypes = {
    dayTimeSlider: PropTypes.func.isRequired,
    nightTimeSlider: PropTypes.func.isRequired
  }

  render() {
    const { dayTimeSlider, nightTimeSlider, nightTimeSliderValue, dayTimeSliderValue} = this.props;
    return (
      <div>
        <Slider
          value={dayTimeSliderValue}
          max={6500}
          min={2700}
          step={1}
          onChange={dayTimeSlider}
          description={`Day time temperature, currently at ${dayTimeSliderValue}k`}
        />
        <Slider
          value={nightTimeSliderValue}
          max={6500}
          min={2700}
          step={1}
          onChange={nightTimeSlider}
          description={`Night time temperature, currently at ${nightTimeSliderValue}k`}
        />
      </div>
    );
  }
}
