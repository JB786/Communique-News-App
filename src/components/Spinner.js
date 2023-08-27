import React, { Component } from 'react'
import loader from "./Fidget-spinner.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className='my-4' src={loader} alt="Loading..." style={{filter: "invert(0.1)"}} />
      </div>
    )
  }
}

export default Spinner
