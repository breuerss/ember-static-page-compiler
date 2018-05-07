import Ember from 'ember';
import Page from '../models/page';

export default Ember.Component.extend({
    selected: Ember.computed.alias('model.isSelected'),

    click (event) {
        this.get('model').select();
        event.stopPropagation();
    }
});
