import React from 'react';

export default function ProductListItem(props){
    return <div>
        <h3>{props.name}</h3>
        <img height={100}
            title = {props.name}
            src={`/product/${props.image}`}
            alt="Product_Image"
        />
        <div>{props.description}</div>
        <div>{props.price}</div>
    </div>
}