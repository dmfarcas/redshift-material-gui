import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class InformationParagraph extends Component {

  componentDidMount() {
    this.showGreetings();
  }

  showGreetings(isItNight = false) {
    const { settings } = this.props;
    if(isItNight) {
      return {
        greetingText: "Late night? The sun set at ",
        picture: "./assets/nighttime.png"
      };
    } else {
      return {
        greetingText: "Hello! The sun will set at ",
        picture: "./assets/daytime.png"
      };
    }

  }


  render() {
    const { settings } = this.props;

    return (
      <div>
        <Card>
          <CardMedia
            overlay={<CardTitle title={
              this.showGreetings(false).greetingText + settings.sunriseSunset.sunset + " today."
            }
            subtitle={
              `Current color temperature is ${settings.lastChangedValue}k.`
            }
            />
            }>
            <img src={this.showGreetings(false).picture} />
          </CardMedia>
        </Card>
      </div>
    );
  }

}
