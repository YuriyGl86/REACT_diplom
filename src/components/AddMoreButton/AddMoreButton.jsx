import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../store/slices/appStateSlice';
import { Preloader } from '../Preloader';

export function AddMoreButton() {
    const dispatch = useDispatch();
    const { loadingMore } = useSelector(store => store.appState);

    const handleAddMore = () => {
        dispatch(appStateActions.incrementOffset());
    };

    return (
        <div className="text-center">
            {loadingMore ? <Preloader /> : null}
            <button
                className="btn btn-outline-primary"
                onClick={handleAddMore}
                disabled={loadingMore}
                onFocus={e => {
                    e.target.blur();
                }}
            >
                Загрузить ещё
            </button>
        </div>
    );
}
