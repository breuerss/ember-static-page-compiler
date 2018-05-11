import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['template-editor'],
    classNameBindings: ['hidden:hide'],
    hidden: true,

    actions: {
        toggleVisibility () {
            this.toggleProperty('hidden');
        }
    }
});
