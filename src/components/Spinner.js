import React, { Component } from 'react'
import loader from "./Fidget-spinner.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className='my-4' src={loader} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner
