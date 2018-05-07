import Ember from 'ember';

export default Ember.Mixin.create({
    init () {
        this._super(...arguments);

        this.set('contents', []);
    },

    addContent (content) {
        this.get('contents').pushObject(content);
        content.set('parentModel', this);
    },
});
