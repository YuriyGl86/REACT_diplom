import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../../store/slices/appStateSlice';
import { useNavigate } from 'react-router-dom';

export function SearchExpander() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { headerSearchOpen, headerSearch } = useSelector(
        store => store.appState,
    );

    const handleSearchExpanderClick = () => {
        dispatch(appStateActions.toggleHeaderSearch());
        if (headerSearchOpen && headerSearch) {
            dispatch(appStateActions.goToCatalogSearch());
            navigate('/catalog');
        }
    };

    return (
        <>
            <div
                data-id="search-expander"
                className="header-controls-pic header-controls-search"
                onClick={handleSearchExpanderClick}
            ></div>
        </>
    );
}
