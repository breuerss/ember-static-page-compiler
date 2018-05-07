import Ember from 'ember';
import Selectable from '../mixins/selectable-model';
import PageContainer from '../mixins/page-container';

export default Ember.Object.extend(Selectable, PageContainer, {
    name: '',
});
