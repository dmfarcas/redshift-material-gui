import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import MainAppBar from '../components/MainAppBar';
import InformationParagraph from '../components/InformationParagraph';
import ToggleRedshift from '../components/ToggleRedshift';
import TemperatureControl from '../components/TemperatureControl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
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
            settings={settings}
          />
          
        <Paper className={styles.generalinfo} zDepth={2}>
          <InformationParagraph />
        </Paper>
        
        <Paper className={styles.settings} zDepth={2}>
          <ToggleRedshift toggleRedshift={actions.toggleRedshift} />
          <TemperatureControl
            dayTimeSlider={actions.dayTimeSlider}
            nightTimeSlider={actions.nightTimeSlider}
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
