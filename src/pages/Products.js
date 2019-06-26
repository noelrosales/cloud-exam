import React, {useContext} from 'react';
import ProductItem from '../components/ProductItem';
import { Context } from '../context/Context';

const Products = () => {
    const store = useContext(Context);

    return (
        <div className="row">
            {
                store.products.map(product => {
                    return (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <ProductItem 
                                product={product}/>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default Products
