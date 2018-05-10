import Ember from 'ember';

export default Ember.Controller.extend({
    projectManager: Ember.inject.service(),
    contentModel: Ember.computed.alias('projectManager.selectedContent'),
});
