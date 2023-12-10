import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function HeaderCart() {
    const { items } = useSelector(store => store.cart);

    return (
        <Link className="header-controls-pic header-controls-cart" to="/cart">
            {items.length ? (
                <div className="header-controls-cart-full">{items.length}</div>
            ) : null}
            <div className="header-controls-cart-menu"></div>
        </Link>
    );
}
