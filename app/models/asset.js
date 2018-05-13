import Ember from 'ember';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Serializable, {
    name: '',
    size: 0,
    type: '',
    data: null,
});
