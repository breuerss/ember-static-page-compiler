import Ember from 'ember';

export default Ember.Service.extend({
    modelFactory: Ember.inject.service(),
    serialize (projects) {
        let json = projects.reduce((json, project) => {
            if (json !== '[') {
                json = json + ', ';
            }

            return json + project.toJson();
        }, '[');
        json = json + ']';

        return json;
    },

    unserialize (json) {
        let obj = JSON.parse(json);
        const factory = this.get('modelFactory');

        return obj.map(element => {
            return factory.create('project').fromData(element);
        });
    },
});
