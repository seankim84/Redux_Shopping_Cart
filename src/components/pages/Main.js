import React from 'react';
import ProductListing from '../../features/product-listing';
import data from '../../data/products.json';


const Main = () => (
    <div>
        <ProductListing products={data.products}/>
    </div>
);
export default Main;