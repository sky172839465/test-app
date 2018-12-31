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
        <p>Hello world</p>
        <Calculate
          price={this.state.price}
          handleChange={this.handleChange}
          handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
