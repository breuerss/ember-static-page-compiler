import Ember from 'ember';

export default Ember.Service.extend({
    serializer: Ember.inject.service(),

    load () {
        let projects = this.getStorage().projects;

        if (projects === undefined) {
            projects = [];
        }

        const serializer = this.get('serializer');
        return serializer.unserialize(projects);
    },

    save (projects) {
        if (!projects) {
            projects = [];
        }

        let serializer = this.get('serializer');
        let json = serializer.serialize(projects);
        this.getStorage().projects = json;
    },

    getStorage () {
        let storage = {};
        if (localStorage) {
            storage = localStorage;
        } else {
            // TODO user notification.
        }

        return storage;
    },
});
