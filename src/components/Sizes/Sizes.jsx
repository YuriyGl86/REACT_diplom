import React from 'react';
import { Size } from '../Size/Size';

export function Sizes({ sizes, selectedSize, setSelectedSize }) {
  return (
    <>
      {sizes
        .filter(i => i.available)
        .map(item => {
          return (
            <Size
              key={item.size}
              size={item}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />
          );
        })}
    </>
  );
}
