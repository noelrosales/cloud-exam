import React,{useContext} from 'react'
import { Context } from '../context/Context';

const Computation = () => {
    const store = useContext(Context);

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
                  <div className="form-group">
                    <label>VOUCHER</label>
                    <input type="text" className="form-control" aria-describedby="helpId" />
                    <button type="button" class="btn btn-primary">APPLY VOUCEHR</button>
                    <small className="form-text text-muted">Put you VOUCHER here for discounts</small>
                  </div>
                <h6>Total:</h6>
                <h4>£ {store.total.toFixed(2)}</h4>
              </div>
            </div>
        </div>
    )
}

export default Computation
