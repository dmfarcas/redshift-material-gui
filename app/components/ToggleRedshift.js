import React, { Component, PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';

export default class ToggleRedshift extends Component {
  static propTypes = {
    toggleRedshift: PropTypes.func.isRequired
  }

  render() {
    const { toggleRedshift } = this.props

    return (
      <Toggle
        label="Disable for an hour (for doing color sensitive work)"
        defaultToggled={true}
        onClick={toggleRedshift}
      />
    );
  }
}
