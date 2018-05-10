import Ember from 'ember';
export default Ember.Service.extend({
    modelFactory: Ember.inject.service(),
    projects: [],

    selectedModel: null,
    selectedPage: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, 'page');
    }),

    selectedProject: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, 'project');
    }),

    selectedContent: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, 'content');
    }),

    findClosestOfType(model, type) {
        if (model === null) {
            return null;
        }

        if (this.get('modelFactory').is(model, type)) {
            return model;
        }

        const parentModel = model.get('parentModel');
        if (parentModel === undefined) {
            return null;
        }

        return this.findClosestOfType(parentModel, type);
    },

});
