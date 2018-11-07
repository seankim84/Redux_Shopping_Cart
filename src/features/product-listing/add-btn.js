import React from 'react';
import { Button } from 'antd';


export default function AddButton(props){
    return <Button type="primary"
        onClick={() => props.addToCart(props.product)}
    >Add to Cart({
        (props.cartItem && props.cartItem.quantity) || 0
    })</Button>
}