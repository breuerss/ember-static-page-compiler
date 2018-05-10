import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
    classNames: ['content-entry-container'],
    content: Ember.computed.alias('model'),
    actions: {
        removeContent (event) {
            event.stopPropagation();
            event.preventDefault();
            this.sendAction('removeContent', this.get('content'));
        },
    }
});
