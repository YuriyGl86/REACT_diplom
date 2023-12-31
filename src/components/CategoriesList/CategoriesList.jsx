import { useGetCategoriesQuery } from '../../store/catalogFetchAPI';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { Preloader } from '../Preloader';

export function CategoriesList() {
    const { data, error, isLoading, isSuccess } = useGetCategoriesQuery();

    return (
        <>
            {error
                ? `Произошла ошибка загрузки категорий каталога - ${error}`
                : null}
            {isLoading ? <Preloader /> : null}
            {isSuccess ? (
                <ul
                    className="catalog-categories nav justify-content-center"
                    role="menu"
                >
                    {[{ id: null, title: 'Все' }, ...data].map(category => (
                        <CategoryItem
                            category={category}
                            key={category.title}
                        />
                    ))}
                </ul>
            ) : null}
        </>
    );
}
