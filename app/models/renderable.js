import Ember from 'ember';
import Selectable from '../mixins/selectable-model';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Serializable, Selectable, {
    template: '',
});
