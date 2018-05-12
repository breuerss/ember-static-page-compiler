import Ember from 'ember';
import Selectable from './selectable-entry';
import Hideable from '../mixins/hideable';

export default Selectable.extend(Hideable, {
    classNames: ['page-entry-container'],
    page: Ember.computed.alias('model'),
    modelFactory: Ember.inject.service(),
    actions: {
        addContent (event) {
            event.stopPropagation();
            event.preventDefault();
            let content = this.get('modelFactory').create('content');
            this.get('page').addContent(content);
        },
        addPage (event) {
            event.stopPropagation();
            event.preventDefault();
            let page = this.get('modelFactory').create('page');
            this.get('page').addPage(page);
        },
        removePage (event) {
            event.stopPropagation();
            event.preventDefault();
            const page = this.get('page');
            page.get('parentModel').removePage(page);
        },
    }

});
