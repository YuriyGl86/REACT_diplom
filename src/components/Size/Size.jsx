import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../store/slices/appStateSlice';

export function Size({ size, selectedSize, setSelectedSize }) {
  const handleSizeSelect = e => {
    setSelectedSize(size.size);
  };

  return (
    <span
      className={`catalog-item-size ${selectedSize === size.size ? 'selected' : ''}`}
      onClick={handleSizeSelect}
    >
      {size.size}
    </span>
  );
}
