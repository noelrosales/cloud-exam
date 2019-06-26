import React, {useContext} from 'react'
import { Context } from '../context/Context';

const CartItem = ({cartItem}) => {
    const store = useContext(Context);

    return (
        <div>
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title">{cartItem.name}</h4>
                <p className="card-text">{cartItem.category}</p>
                <p className="card-text">{cartItem.price}</p>
              </div>
              <div className="card-footer text-muted">
                <p>{cartItem.quantity} Items</p>
                <button type="button" 
                        className="btn btn-primary"
                        disabled={store.products[cartItem.id - 1].quantity === 0 ? true : false}
                        onClick={() => store.addToCart(cartItem.id)}>+</button>
                <button type="button" 
                        className="btn btn-danger"
                        onClick={() => store.removeToCart(cartItem.id)}>-</button>
              </div>
            </div>
        </div>
    )
}

export default CartItem
