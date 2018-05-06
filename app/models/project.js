import Ember from 'ember';

export default Ember.Object.extend({
    name: '',
    pages: [],

    addPage (page) {
        this.get('pages').pushObject(page);
    },
});
