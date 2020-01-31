import React, { Component } from 'react'
import BackgroundContainer from '../BackgroundContainer'
import ThumbnailNav from '../ThumbnailNav'
import { DEFAULT_IMAGE } from '../../constants'

export default class CssBackgroundPositioner extends Component {

  constructor(props) {
    super(props);

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);

    this.state = {
      backgroundImage: DEFAULT_IMAGE
    };

  }

  handleImageChange(newImageUrl) {
    console.log(`handleImageChange(newImageUrl)\n${ JSON.stringify(newImageUrl) }`)
    this.setState({
      backgroundImage: newImageUrl
    })
  }

  handlePositionChange(newPosition) {
    console.log(`handlePositionChange(newPosition)\n${ newPosition }`)
    this.setState({
      backgroundPosition: newPosition
    })
  }

  render() {
    return (
      <>
        <BackgroundContainer {...this.state} />
        <ThumbnailNav {...this.state} onHandleImageChange={this.handleImageChange} onHandlePositionChange={this.handlePositionChange} />
      </>
    )
  }
}