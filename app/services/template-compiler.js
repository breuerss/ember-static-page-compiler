import Ember from 'ember';
import Handlebar from 'handlebars';

export default Ember.Service.extend({
    compileModel (model) {
        const data = model.toNative();
        const layout = model.get('template');

        return this.compile(layout, data);
    },

    compile (layout, data) {
        const template = Handlebar.compile(layout);

        return template(data);
    }
});
