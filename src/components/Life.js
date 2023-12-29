import React, { Component } from 'react'

export default class Life extends Component {
    constructor(props)
    {
        super(props)
        console.log("constructor called")
        this.state =
        {
            count :0
        }
    }
    componentWillMount()
    {
        console.log("componentWillMount")
    }
    Update=()=>
    {
        this.setState({count:this.state.count+1})
    }
    componentDidMount()
    {
        console.log("componentDidMount of Cart called")
    }

    componentDidUpdate(prevProp, prevState)
    {
        console.log("componentDidUpdate of Cart called")
    }

   

  render() {
    console.log("render called")
    return (
      <div>Life
        {this.count} 
        <button onClick={this.Update} > Update COunter  </button></div>
    )
  }
}
