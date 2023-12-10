import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../store/slices/appStateSlice';

export function Count({ count, SetCount }) {
    // const dispatch = useDispatch();
    // const { count } = useSelector(store => store.appState);

    const handleDecrement = () => {
        if (count > 1) {
            SetCount(prev => prev - 1);
        }
    };

    const handleIncrement = () => {
        if (count < 10) {
            SetCount(prev => prev + 1);
        }
    };

    return (
        <p>
            Количество:
            <span className="btn-group btn-group-sm pl-2">
                <button
                    className="btn btn-secondary"
                    // onClick={() => dispatch(appStateActions.decrementcount())}
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span className="btn btn-outline-primary">{count}</span>
                <button
                    className="btn btn-secondary"
                    // onClick={() => dispatch(appStateActions.incrementcount())}
                    onClick={handleIncrement}
                >
                    +
                </button>
            </span>
        </p>
    );
}
