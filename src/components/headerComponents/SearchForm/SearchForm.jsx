import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../../store/slices/appStateSlice';
import { useNavigate } from 'react-router-dom';

export function SearchForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { headerSearchOpen, headerSearch } = useSelector(store => store.appState);

    const handleChange = ({ target: { value } }) => {
        dispatch(appStateActions.changeHeaderSearch(value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(appStateActions.toggleHeaderSearch());
        dispatch(appStateActions.goToCatalogSearch());
        navigate('/catalog');
    };

    return (
        <form
            data-id="search-form"
            className={`header-controls-search-form form-inline ${
                !headerSearchOpen && 'invisible'
            }`}
            onSubmit={handleSubmit}
        >
            <input
                className="form-control"
                placeholder="Поиск"
                onChange={handleChange}
                value={headerSearch}
            />
        </form>
    );
}
