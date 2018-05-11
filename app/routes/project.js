import Ember from 'ember';

export default Ember.Route.extend({
    templateCompiler: Ember.inject.service(),
    template: '<div>{{title}}</div>',
    data: '{"title": "My title"}',
    output: '',

    model () {
        return {
            template: this.get('template'),
            data: this.get('data'),
            output: this.get('output'),
        };
    },
    actions: {
        compile () {
            const project = this.currentModel;
            const template = project.template;
            const json = JSON.parse(project.data);
            const output = this.get('templateCompiler').compile(template, json);

            Ember.set(project, 'output', output);
        },
    }
});
