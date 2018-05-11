import Ember from 'ember';

export default Ember.Component.extend({
    selected: Ember.computed.alias('model.isSelected'),

    actions: {
        click () {
            this.get('model').select();
        }
    }
});
