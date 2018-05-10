import Ember from 'ember';
export default Ember.Service.extend({
    storage: Ember.inject.service('project-storage'),
    modelFactory: Ember.inject.service(),
    projects: [],

    init () {
        this._super(...arguments);
        this.set('projects', this.get('storage').load());
        this.backupLoop();
    },

    backupLoop() {
        setTimeout(() => {
            this.get('storage').save(this.get('projects'));
            this.backupLoop();
        }, 1000);
    },

    addProject () {
        let project = this.get('modelFactory').create('project');
        this.get('projects').pushObject(project);
        this.set('selectedModel', project);
    },

    deleteProject (project) {
        this.get('projects').removeObject(project);
        if (Ember.isEqual(project, this.get('selectedModel'))) {
            this.set('selectedModel', null);
        }
        project.destroy();
    },

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
