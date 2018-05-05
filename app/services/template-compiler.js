import Ember from 'ember';
import Handlebar from 'handlebars';

export default Ember.Service.extend({
    compile (layout, json) {
        const template = Handlebar.compile(layout);
        return template(json);
    }
});
