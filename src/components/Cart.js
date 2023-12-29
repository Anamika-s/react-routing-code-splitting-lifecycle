import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props)
    {
        super(props)
        console.log("constructor of Cart called")
        this.state=
        {
            price:this.props.price
        }
    }

    static getDerivedStateFromProps (props, state)
    {

        console.log("getDerivedStateFromProps called")
        if(props.price != state.price)
        return{price: props.price};
    return null;
    }

    Update=()=>
    {
        this.setState({print: this.state.price+10})
    }

    componentDidMount()
    {
        console.log("componentDidMount of Cart called")
    }
    componentDidUpdate(prevProp, prevState)
    {
        if(this.props.productId != prevProp.productId)
   
        {
        console.log("Prev Prop" + prevProp.price)
        console.log("Prev State" + prevState.price)
        console.log("componentDidUpdate of Cart called")
        }
    }

    shouldComponentUpdate(nextProps, nextState)
     {
        if(this.props.price !== nextProps.price)
        {
        
        console.log("shouldComponentUpdate called")
     return true; 
    }
    else 
    return false;
     }

     
     componentWillUnmount()
     {
        console.log("Cart has been removed")
     }




  render() {
    return (
      <div>Cart 
        <button onClick={this.Update}> Update Qty </button>
{this.state.price}
      </div>
    )
  }
}
