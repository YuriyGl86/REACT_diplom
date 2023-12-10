import React from 'react';
import { MenuItem } from '../MenuItem';

export function MenuList({ menuItems, classNames }) {
    return (
        <ul className={classNames}>
            {menuItems.map(item => (
                <MenuItem item={item} key={item.title} />
            ))}
        </ul>
    );
}
