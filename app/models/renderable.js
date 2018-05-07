import Ember from 'ember';
import Selectable from '../mixins/selectable-model';

export default Ember.Object.extend(Selectable, {
    template: '',
    toNative() {
        return Object.assign({}, this);
    },
    toJson() {
        return JSON.stringify(this.toNative());
    }
});
