import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import MainAppBar from '../components/MainAppBar';
import InformationParagraph from '../components/InformationParagraph';
import ToggleRedshift from '../components/ToggleRedshift';
import AutostartCheckbox from '../components/AutostartCheckbox'
import TemperatureControl from '../components/TemperatureControl';

import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import styles from './App.css';


injectTapEventPlugin();

class App extends Component {
  render() {
    const { actions, settings } = this.props;
    return (
      <div>

        <MainAppBar
          defaultLocation={actions.defaultLocation}
          sunriseSunset={actions.sunriseSunset}
          settings={settings} //TODO do not send entire object
        />

        <InformationParagraph
          settings={settings}
        />

        <Paper className={styles.settings} zDepth={2}>

          <ToggleRedshift toggleRedshift={actions.toggleRedshift} />

          <Divider className={styles.divider_temp_settings} />

          <TemperatureControl
            dayTimeSlider={actions.dayTimeSlider}
            nightTimeSlider={actions.nightTimeSlider}
            dayTimeSliderValue={settings.dayTimeSlider}
            nightTimeSliderValue={settings.nightTimeSlider}
          />

          <Divider className={styles.divider_start_auto} />
          <AutostartCheckbox
          autostart={actions.autostart}
          autostartValue={settings.autostart}
          />

        </Paper>

      </div>
    );
  }
}

App.propTypes = {
  settings: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
