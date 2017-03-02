import { InjectStore, HasStore, Store } from 'ng-state';

@InjectStore((currentPath: string[]) => {
    return currentPath.indexOf('search') >= 0
        ? ['entities', '${stateIndex}']
        : ['${stateIndex}'];
})
export class BooksPreviewStateActions implements HasStore {
    store: Store<any>;

    get book() {
        return this.store.map(state => {

            let details = {
                id: state.get('id'),
                title: state.getIn(['volumeInfo', 'title']),
                subtitle: state.getIn(['volumeInfo', 'subtitle']),
                description: state.getIn(['volumeInfo', 'description']),
                thumbnail: false
            };

            if (state.getIn(['volumeInfo', 'imageLinks'])) {
                details.thumbnail = state.getIn(['volumeInfo', 'imageLinks', 'smallThumbnail']);
            }

            return details;
        });
    }
}