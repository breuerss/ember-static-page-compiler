import Ember from 'ember';

export default Ember.Mixin.create({
    hidden: false,
    actions: {
        toggleVisibility (event) {
            if (event && event.stopPropagation) {
                event.stopPropagation();
                event.preventDefault();
            }
            this.toggleProperty('hidden');
        },
    }
});
