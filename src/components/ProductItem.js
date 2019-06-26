import React, {useContext} from 'react'
import { Context } from '../context/Context';

const ProductItem = ({product}) => {
    const store = useContext(Context);
    return (
        <div className="card" style={{height: '100%'}}>
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.category}</p>
                {
                    product.quantity > 0 ? (
                        <p className="text-muted">{product.quantity > 1 ? product.quantity + " Items" : product.quantity + " Item"}  Available</p>
                    ) : (
                        <p className="text-muted">Out of Stock</p>
                    )
                }
                <h6>£{product.price}</h6>
            </div>
            <button 
                type="button" 
                className={product.quantity === 0 ? "btn btn-danger" : "btn btn-primary"}
                onClick={ () => store.addToCart(product.id)}
                disabled={product.quantity === 0 ? true : false}
            >
                {product.quantity === 0 ? 'Item Not Available': 'Add To Cart'}
            </button>
        </div>
    )
}

export default ProductItem
