import Ember from 'ember';

export default Ember.Controller.extend({
    projectManager: Ember.inject.service(),
    page: Ember.computed.alias('projectManager.selectedPage'),
});
