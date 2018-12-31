import React, { Component } from 'react'
import Calculate from './Component/Calculate'

class App extends Component {
  constructor () {
    super()
    this.state = {
      price: 0
    }
  }

  handleChange = event => this.setState({price: event.target.value})

  handleClick = () => this.setState({price: this.state.price / 2})

  render () {
    return (
      <div className='App'>
        <p>Goodbye 2018</p>
        <p>Hello 2019</p>
        <p>new text</p>
        <Calculate
          price={this.state.price}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
