import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
    classNames: ['project-entry-container'],
    project: Ember.computed.alias('model'),
    zipExporter: Ember.inject.service(),
    modelFactory: Ember.inject.service(),

    actions: {
        addPage (event) {
            event.stopPropagation();
            event.preventDefault();
            const project = this.get('project');
            const page = this.get('modelFactory').create('page');
            project.addPage(page);
        },

        removePage (page) {
            const project = this.get('project');
            project.removePage(page);
        },

        exportProject (event) {
            event.stopPropagation();
            event.preventDefault();
            this.get('zipExporter').export(this.get('project'));
        },
        deleteProject (event) {
            event.stopPropagation();
            event.preventDefault();
            this.sendAction('deleteProject', this.get('project'));
        },
    },
});
