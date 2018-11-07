import React from 'react';
import { Button } from 'antd';

export default function RemoveButton(props){
    return <Button type="primary"
        onClick={() => props.removeFromCart (props.cartItem)}
    >Remove from Cart ({
        (props.cartItem && props.cartItem.quantity) || 0
    })
    </Button>
}