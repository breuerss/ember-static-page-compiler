import Ember from 'ember';
import Selectable from '../mixins/selectable-model';
import PageContainer from '../mixins/page-container';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Serializable, Selectable, PageContainer, {
    name: '',
});
