import Ember from 'ember';

export default Ember.Object.extend({
    template: '',
    toNative() {
        return Object.assign({}, this);
    },
    toJson() {
        return JSON.stringify(this.toNative());
    }
});
