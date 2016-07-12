import React, { Component, PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';

export default class DisableRedshift extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired
  }
  
  render() {
    const { toggle } = this.props;

    return (
      <Toggle
        label="Disable for an hour (for doing color sensitive work)"
        onClick={toggle}
      />
    );
  }
}
