import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
export default class AutostartCheckbox extends Component {
  render() {
    return (
      <Checkbox
        label="Start Redshift automatically at startup"
      />
    );
  }
}
