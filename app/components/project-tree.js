import Ember from 'ember';
import Hideable from '../mixins/hideable';

export default Ember.Component.extend(Hideable, {
    classNames: ['project-tree'],
    classNameBindings: ['hidden:hide'],
    projectManager: Ember.inject.service(),
    projects: Ember.computed.alias('projectManager.projects'),

    actions: {
        addProject () {
            this.get('projectManager').addProject();
        },
        deleteProject (project) {
            this.get('projectManager').deleteProject(project);
        }
    }
});
