import Ember from 'ember';
import Selectable from '../mixins/selectable-model';

export default Ember.Object.extend(Selectable, {
    template: '',

    toNative() {
        return Object.assign({}, this);
    },

    toData () {
        let native = this.toNative();

        return Object.keys(native).reduce((obj, key) => {
            let value = native[key];
            console.log(typeof value);
            if ((typeof value).match(/(string|number|boolean)/)) {
                obj[key] = value;
            }

            return obj;
        }, {});
    },

    toJson() {
        return JSON.stringify(this.toData());
    },

});
