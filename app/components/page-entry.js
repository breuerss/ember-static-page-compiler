import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
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
        removeContent (content) {
            this.get('page').removeContent(content);
        },
        removePage (event) {
            event.stopPropagation();
            event.preventDefault();
            this.sendAction('removePage', this.get('page'));
        },
    }

});
