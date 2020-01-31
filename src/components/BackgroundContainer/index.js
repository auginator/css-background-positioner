import React, { Component } from 'react';

export default class BackgroundContainer extends Component {

  render() {
    const backgroundStyle = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')',
      backgroundPosition: this.props.backgroundPosition
    }

    return (
      <div className="bg" style={backgroundStyle}></div>
    )
  }
}