import React,{useState, useContext} from 'react'
import { Context } from '../context/Context';

const Computation = () => {
    const store = useContext(Context);
    const [voucher, setVoucher] = useState('');
    const [discounted, setDiscounted] = useState(false);
    const [error, setError] = useState('');

    const applyVoucher = () => {
        const valid = store.applyVoucher(voucher);
        if(!valid){
           setError('Invalid voucher code or check if you have 100.00 or more worth of purchase'); 
        } else {
            setDiscounted(true);
        }
    }

    return (
        <div>
            <div className="card">
              <div className="card-header">
                <h4>Your Orders: </h4>
              </div>
              <div className="card-body p-0">
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                store.cart.map(item => {
                                    let total = item.quantity * item.price;

                                    return (
                                        <tr key={item.id} className="text-right">
                                            <td className="text-left">{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price.toFixed(2)}</td>
                                            <td>{total.toFixed(2)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                </table>
              </div>
              <div className="card-footer">
                  {
                      !discounted ? (
                        <div className="form-group">
                            <label>VOUCHER</label>
                            <input 
                                type="text" 
                                onChange={(e) => setVoucher(e.target.value)} 
                                className="form-control" 
                                aria-describedby="helpId"/>
                            <button 
                                type="button" 
                                onClick={() => applyVoucher()} 
                                class="btn btn-primary">APPLY VOUCEHR</button>
                            <small className="form-text text-danger">{error}</small>
                        </div>
                      ) : (
                        <small className="form-text text-success">Voucher Successfully Applied</small>
                      )
                  }
                  
                <h6>Total:</h6>
                <h4>£ {store.total.toFixed(2)}</h4>
              </div>
            </div>
        </div>
    )
}

export default Computation
