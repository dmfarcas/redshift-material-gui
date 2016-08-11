import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class InformationParagraph extends Component {

  showGreetings() {
    this.setState({
      greetings: "Late night?"
    });
  }


  componentDidMount() {
    this.showGreetings();
  }

  render() {
    const { settings } = this.props;
    return (
      <div>
        <Card>
          <CardMedia
            overlay={<CardTitle title={`${this.state.greetings} The sun set at ${settings.sunriseSunset.sunset} today.`}
                                subtitle={`Current color temperature is ${settings.lastChangedValue}k.`} />}
          >
            <img src="./assets/nighttime.png" />
          </CardMedia>
        </Card>
      </div>
    );
  }

}
