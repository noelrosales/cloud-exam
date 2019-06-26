import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

const Navbar = () => {
    const store = useContext(Context);

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Foodster</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            My Cart 
                            <span className="badge badge-pill badge-primary ml-2">{store.cart.length}</span>
                        </Link>
                    </li>
                </ul>  
            </div>
        </nav>
    )
}

export default Navbar;
