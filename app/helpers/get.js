import Ember from 'ember';

export function get(params/*, hash*/) {
    const model = params[0];
    const key = params[1];
    return model.get(key);
}

export default Ember.Helper.helper(get);
