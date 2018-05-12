import Ember from 'ember';
import Hideable from '../mixins/hideable';

export default Ember.Component.extend(Hideable, {
    classNames: ['template-editor'],
    classNameBindings: ['hidden:hide'],
    hidden: true,
});
