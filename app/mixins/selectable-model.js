import Ember from 'ember';

export default Ember.Mixin.create({
    projectManager: Ember.inject.service(),
    isSelected: Ember.computed('projectManager.selectedModel', function () {
        return this === this.get('projectManager.selectedModel')
    }),

    select () {
        this.get('projectManager').set('selectedModel', this);
    }
});
