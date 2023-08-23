import React, { Component } from 'react'
import loader from "./Fidget-spinner.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <img src={loader} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner
