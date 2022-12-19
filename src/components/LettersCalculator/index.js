// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeInput = event => {
    this.setState({count: event.target.value.length})

    console.log(event.target.value)
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the letters you enter</h1>
          <label htmlFor="abc" className="para">
            Enter the phrase
          </label>
          <input
            id="abc"
            htmlFor="a"
            placeholder="Enter the phrase"
            onChange={this.changeInput}
            className="inputEl"
            type="text"
          />
          <br />

          <p className="button">No.of Letters: {count}</p>
        </div>
        <img
          className="image-size"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
