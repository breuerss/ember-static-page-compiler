import Ember from 'ember';

export default Ember.Mixin.create({
    init () {
        this._super(...arguments);

        this.set('pages', []);
    },

    addPage (page) {
        this.get('pages').pushObject(page);
        page.set('parentModel', this);
    },
});
