import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['project-tree'],
    classNameBindings: ['hidden:hide'],
    hidden: false,
    projectManager: Ember.inject.service(),
    projects: Ember.computed.alias('projectManager.projects'),

    actions: {
        toggleVisible () {
            this.toggleProperty('hidden');
        },
    }
});