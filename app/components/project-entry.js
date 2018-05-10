import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
    classNames: ['project-entry-container'],
    project: Ember.computed.alias('model'),
    zipExporter: Ember.inject.service(),

    actions: {
        exportProject (event) {
            event.stopPropagation();
            event.preventDefault();
            this.get('zipExporter').export(this.get('project'));
        },
        delete (event) {
            event.stopPropagation();
            event.preventDefault();
            this.sendAction('deleteProject', this.get('project'));
        },
    },
});
