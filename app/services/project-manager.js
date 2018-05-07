import Ember from 'ember';
import Project from '../models/project';
import Page from '../models/page';
import Content from '../models/content';

export default Ember.Service.extend({
    projects: [],

    selectedModel: null,
    selectedPage: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, Page);
    }),

    selectedProject: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, Project);
    }),

    selectedContent: Ember.computed('selectedModel', function () {
        const model = this.get('selectedModel');
        return this.findClosestOfType(model, Content);
    }),

    findClosestOfType(model, type) {
        if (model === null) {
            return null;
        }

        if (this.is(model, type)) {
            return model;
        }

        const parentModel = model.get('parentModel');
        if (parentModel === undefined) {
            return null;
        }

        return this.findClosestOfType(parentModel, type);
    },

    is (model, type) {
        return type.prototype.isPrototypeOf(model);
    },

});
