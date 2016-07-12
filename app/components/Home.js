import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import MainAppBar from './MainAppBar';
import InformationParagraph from './InformationParagraph'
import DisableRedshift from './DisableRedshift'


export default class Home extends Component {
  render() {
    return (
      <div>
        <MainAppBar />
        <InformationParagraph />
        <DisableRedshift />
      </div>
    );
  }
}
