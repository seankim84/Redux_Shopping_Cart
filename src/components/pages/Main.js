import React from 'react';
import ProductListing from '../../features/product-listing';
import data from '../../data/products.json';


const Main = () => (
    <div>
        <h1>This is the Main</h1>
        <ProductListing products={data.products}/>
    </div>
);
export default Main;