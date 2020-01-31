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
      <div className="thumbnail">
        <h4>CSS Background Positioner</h4>
        <p><strong>Click on the key image feature to get the background-position needed.</strong></p>


        <ThumbNailImage
          src={this.props.backgroundImage}
          alt="Image Preview"
          handleClick={
            (event, dimensions) => {
              this.handlePositionChange.call(this, event, dimensions)
            }
          }
        />
          {/* {
            dimensions => {
            return (
              <img src={this.props.backgroundImage} alt="" onClick={ event => {
                this.handlePositionChange(event, dimensions)
              }} />
            )
          }
        } */}

      <p className="info">background-position:<br />{this.props.backgroundPosition}</p>
        <hr />
        <p>Use your own Image<br />(paste in URL)</p>
        <input type="text" onChange={this.handleInputChange} />
        { this.state.message && <div className="alert">{this.state.message}</div> }
      </div>
    )
  }
}