import React, { Component } from 'react'

export default class Check extends Component {

    constructor(props)
    {
        super(props)
         
    }
    componentWillMount()
    {
        console.log("componentWillUnmount")
   
    }
      render() {
    return (
      <div>Check</div>
    )
  }
}
