import React, { createContext } from 'react';

export const Context = createContext({
    products: [],
    cart: [],
    total: 0,
    addToCart: () => {},
    removeToCart: () => {},
    computePrice: () => {},
    applyVoucher: () => {},
    checkOut: () => {}
});