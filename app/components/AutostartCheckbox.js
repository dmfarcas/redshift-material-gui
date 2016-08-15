import React, { Component, PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';
export default class AutostartCheckbox extends Component {
  static propTypes = {
    autostart: PropTypes.func.isRequired
  };



render() {
  const { autostart, autostartValue } = this.props;

  return (
      <Toggle
        label="Start Redshift automatically at startup"
        defaultToggled={autostartValue}
        onClick={autostart}
      />
    );
  }
}
