import { Banner } from '../../components/Banner';
import { Widget } from '../../components/Widget';

export function NotFoundPage() {
    return (
        <div className="row">
            <div className="col">
                <Banner />

                <Widget
                    title={'Страница не найдена'}
                    sectionClasses={'top-sales'}
                >
                    <p>Извините, такая страница не найдена!</p>
                </Widget>
            </div>
        </div>
    );
}
