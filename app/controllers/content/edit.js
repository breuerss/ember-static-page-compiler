import Ember from 'ember';

export default Ember.Controller.extend({
    projectManager: Ember.inject.service(),
    contentModel: Ember.computed.alias('projectManager.selectedContent'),
    additionalFields: Ember.computed('contentModel', 'contentModel.template', function () {
        const template = this.get('contentModel.template');
        let fields = [];
        if (template) {
            fields = template.match(/{{.*?}}/g) || [];
            fields = fields.map(field => {
                return field.replace('{{', '').replace('}}', '').trim();
            });

            fields = fields.filter(field => !field.match(/(title|content|asset)/));
        }

        return fields;
    }),
});
