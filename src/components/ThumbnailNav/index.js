import React, { Component } from 'react'
import ThumbNailImage from './ThumbNailImage'

export default class ThumbnailNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      alertTimeoutId: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePositionChange = this.handlePositionChange.bind(this)

  }

  handlePositionChange(cssPosition) {
    this.props.onHandlePositionChange(cssPosition)
  }

  handleInputChange(event) {

    if (!event.target.value) return;

    try {
      // Use this as a quick check to see if URL looks ok.
      const url = new URL(event.target.value); // eslint-disable-line no-unused-vars
      this.props.onHandleImageChange(event.target.value)

    } catch (error) {

      clearInterval(this.state.alertTimeoutId)

      const timeoutId = setTimeout(() => {
        this.setState({ message: null })
      }, 500);

      this.setState({
        message: 'Invalid URL. Please enter a valid one.',
        alertTimeoutId: timeoutId
      })

    }
  }

  render() {
    return (
      <div className="thumbnail-nav">
        <h1 className="title">CSS Background Focal Point</h1>
        <p>Click on the image to set a focal point.</p>
        {/*
          TODO: ADD CREDIT
          Edu Lauton on Unsplash.com
          @edulauton
        */}
        <ThumbNailImage
          src={this.props.backgroundImage}
          alt="Image Preview"
          handleClick={
            (event, dimensions) => {
              this.handlePositionChange.call(this, event, dimensions)
            }
          }
        />

        <p>Paste in your own image URL:</p>
        <input type="text" onChange={this.handleInputChange} />
        { this.state.message && <div className="alert">{this.state.message}</div> }

        <code className="code-block">
          <div className="code-block__content">
            background-position: {this.props.backgroundPosition || 'center center'}
          </div>
        </code>

      </div>
    )
  }
}