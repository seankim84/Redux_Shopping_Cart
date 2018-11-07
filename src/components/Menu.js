import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

const Menu = () => (
    <div style={{ widht: "100%",margin: "2rem" }}>
        <Row gutter={16} style={{ fontSize: "1.5rem", textAlign: "center"}}>
            <Col span={8}><Link exact to="/">Home</Link></Col>
            <Col span={8}><Link to="/single">Single</Link></Col>
            <Col span={8}><Link to="/cart">Cart</Link></Col>
        </Row>
    </div>
)

export default Menu;