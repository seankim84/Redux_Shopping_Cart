import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item'


function ProductListing(props) {
  return <div>
    {
      props.products.map( product =>
        <ProductListItem
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />)
    }
  </div>
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item }) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)

