import Ember from 'ember';

export default Ember.Controller.extend({
    projectManager: Ember.inject.service(),
    project: Ember.computed.alias('projectManager.selectedProject'),
});
