import { CardsList } from '../CardsList';
import { Widget } from '../Widget';
import { Preloader } from '../Preloader';
import { useGetHitsQuery } from '../../store/catalogFetchAPI';

export function Hits() {
    const { data, error, isLoading, isSuccess } = useGetHitsQuery();

    return (
        <>
            {error ? `Произошла ошибка загрузки хитов продаж - ${error}` : null}
            {isLoading ? <Preloader /> : null}
            {isSuccess ? (
                <Widget title={'Хиты продаж!'} sectionClasses={'top-sales'}>
                    <CardsList items={data} />
                </Widget>
            ) : null}
        </>
    );
}
