import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './LocationModule.css'
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LocationModule extends React.Component {

  static propTypes = {
    defaultLocation: PropTypes.func.isRequired,
    sunriseSunset: PropTypes.func.isRequired
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
    const { defaultLocation, sunriseSunset } = this.props;

    fetch('http://ipinfo.io',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      const coords = json.loc
        .split(",")
        .map(item => {
          return parseInt(item)
        });

      defaultLocation(coords);

      return fetch(`http://api.sunrise-sunset.org/json?lat=${coords[0]}&lng=${coords[1]}`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        const sunriseSunsetData = {
          sunrise: json.results.sunrise,
          sunset: json.results.sunset
        }
        sunriseSunset(sunriseSunsetData);
      });

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
        <RaisedButton
          label="Time and Location Settings"
          onTouchTap={this.handleOpen}
          className={styles.locationbutton}
        />
        <Dialog
          title="Time and Location Settings"
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
