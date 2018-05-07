import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
    classNames: ['page-entry-container'],
    page: Ember.computed.alias('model'),
});
