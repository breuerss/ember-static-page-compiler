import Ember from 'ember';
import Hideable from '../mixins/hideable';

export default Ember.Component.extend(Hideable, {
    classNames: ['project-tree'],
    classNameBindings: ['hidden:hide'],
    projectManager: Ember.inject.service(),
    projects: Ember.computed.alias('projectManager.projects'),

    init () {
        this._super(...arguments);
        let mediaQuery = window.matchMedia("(max-width: 767px)");
        this.set('hidden', mediaQuery.matches);
        mediaQuery
        .addListener(mediaQuery => {
            this.set('hidden', mediaQuery.matches);
        });
    },

    actions: {
        addProject () {
            this.get('projectManager').addProject();
        },
        deleteProject (project) {
            this.get('projectManager').deleteProject(project);
        }
    }
});
