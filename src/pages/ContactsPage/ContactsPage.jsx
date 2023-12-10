import { Banner } from '../../components/Banner';
import { ContactsContent } from '../../components/ContactsContent';
import { Widget } from '../../components/Widget';

export function ContactsPage() {
    return (
        <div className="row">
            <div className="col">
                <Banner />

                <Widget title={'Контакты'} sectionClasses={'top-sales'}>
                    <ContactsContent />
                </Widget>
            </div>
        </div>
    );
}
