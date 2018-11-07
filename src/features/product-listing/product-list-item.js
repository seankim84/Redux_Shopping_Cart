import React from 'react'
import Addbtn from './add-btn';
import Removebtn from './remove-btn';
import { Card } from 'antd';
import {Row, Col} from 'antd';

const { Meta } = Card; 

export default function ProductListItem(props) {
  return (
    <div style={{ background: '#ECECEC', padding: '30px'}}>
      <Row gutter={18}>
        <Col span={12}>
          <Card title={props.product.name} 
                cover={<img src={require(`../../data/products/${props.product.image}`)} style={{height:100, width: "auto  "}} alt="productImage" />}
                >
                <Meta title={"$"+props.product.price}/>
                </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>{props.product.description}
            <div style={{marginTop:"1rem"}}>
              <Addbtn
                cartItem={props.cartItem}
                product={props.product}
                addToCart={props.addToCart}
              />
              {
                props.cartItem
                  ?<div style={{marginTop:"10px"}}> 
                  <Removebtn 
                    cartItem={props.cartItem}
                    product={props.product}
                    removeFromCart={props.removeFromCart}
                  />
                  </div>
                  : null
              }
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
