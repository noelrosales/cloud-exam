import React, { Component } from 'react';
import { Context } from '../context/Context';
import produce from 'immer';
import PRODUCTS from '../data/Products';

class Store extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            cart: [],
            total: 0
        }
    }

    componentDidMount() {
        this.setState({products: PRODUCTS})
    }
    

    addToCart = id => {
        const product = this.state.products.find(product => product.id === id)
        const inCart = this.state.cart.findIndex(product => product.id === id)
        let newProducts = [];
        let newCart = [];

        id--;
        newProducts = produce(this.state.products, draftState => {
            draftState[id].quantity = draftState[id].quantity > 0 ? draftState[id].quantity -= 1 : 0;
        });

        if(inCart === -1) {
            product.quantity = 1;
            newCart = produce(this.state.cart, draftState => {
                draftState.push(product)
            })
        } else {
            newCart = produce(this.state.cart, draftState => {
                draftState[id].quantity += 1;
            })
        }

        this.setState({
            products: newProducts,
            cart: newCart,
            total: this.state.total + product.price
        })
    }

    removeToCart = (id) => {
        const product = this.state.products.find(product => product.id === id)
        let newProducts = [];
        let newCart = [];

        id--;
        newProducts = produce(this.state.products, draftState => {
            draftState[id].quantity = draftState[id].quantity >= 0 ? draftState[id].quantity += 1 : 0;
        });

       
        newCart = produce(this.state.cart, draftState => {
            draftState[id].quantity -= 1;
            if(draftState[id].quantity === 0) {
                draftState.splice(id,1)
            }
        })

        this.setState({
            products: newProducts,
            cart: newCart,
            total: this.state.total - product.price
        })
    }

    computePrice = (cart) => {
        
    }

    applyVoucher = (voucherCode) => {
        if(voucherCode === '20OFFPROMO' && this.state.total >= 100) {
            this.setState({
                total: this.state.total - 20.00
            })

            return true;
        } else {
            return false;
        }
    }


    checkOut = () => {
        console.log(this.state.cart.length);
    }

    render(){
        return(
            <Context.Provider value={{
                products: this.state.products,
                cart: this.state.cart,
                total: this.state.total,
                addToCart: this.addToCart,
                removeToCart: this.removeToCart,
                computePrice: this.computePrice,
                applyVoucher: this.applyVoucher,
                checkOut: this.checkOut
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Store;
