import React,{useContext} from 'react'
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';
import Computation from '../components/Computation';

const Cart = () => {
    const store = useContext(Context);

    return (
        <div className="row">
            <div className="col-md-6">
                {
                    store.cart.length > 0 ? (
                        store.cart.map(item => {
                            return <CartItem 
                                        key={item.id}
                                        cartItem={item} />
                        })
                    ) : (
                        <h1>Your cart is empty</h1>
                    )  
                }
            </div>
            <div className="col-md-6">
                <h2>Computation</h2>
                <Computation />
            </div>
        </div>
    )
}

export default Cart
