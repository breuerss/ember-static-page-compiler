import Ember from 'ember';
import Selectable from './selectable-entry';

export default Selectable.extend({
    classNames: ['project-entry-container'],
    project: Ember.computed.alias('model'),
});
