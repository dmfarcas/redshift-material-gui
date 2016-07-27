import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LocationModule extends React.Component {

  static propTypes = {
    defaultLocation: PropTypes.func.isRequired
  }

  state = {
    open: false,
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount = () => {
    const { defaultLocation } = this.props;
    navigator.geolocation.getCurrentPosition(geo => {
      defaultLocation(geo.coords.latitude, geo.coords.longitude);
    });
  };

  render() {
    const { settings } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Location Settings" onTouchTap={this.handleOpen} />
        <Dialog
          title="Location Settings"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <p>We detected that your coordinates are:</p>
        <p>Latitude: {settings.coords.lat.toFixed(2)}</p>
        <p>Longitude: {settings.coords.long.toFixed(2)}</p>
        </Dialog>
      </div>
    );
  }
}
