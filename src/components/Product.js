import React, { Component } from 'react'
import Cart from './Cart'
export default class Product extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            productId:"", price:0,     isCart:true 
        }
    }
    addToCart = (pid)=>
 {
    this.setState({productId: pid, price : this.state.price+1}
    )


 }
 
 removeCart=()=>
 {
    alert("Remove ")
    this.setState({isCart:false})
 }


  render() {
    return (
      <div>Product 
         <button onClick={()=> this.addToCart(1)}> Add to Cart </button>
        <button onClick={()=> this.addToCart(2)}> Add to Cart </button>
       
        <button onClick={()=> this.addToCart(3)}> Add to Cart </button>
       

        {/* <Cart/> */}
        {/* <Cart productId={this.state.productId} price={this.state.price}/> */}
        <button onClick={this.removeCart}> Remove Cart </button>  
       {!this.state.isCart && <h2> Cart has been removed </h2>}
       {this.state.isCart && <Cart productId={this.state.productId} price={this.state.price}/>}
   

      </div>
    )
  }
}
