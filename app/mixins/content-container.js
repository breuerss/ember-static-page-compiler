import Ember from 'ember';

export default Ember.Mixin.create({
    init () {
        this._super(...arguments);

        this.set('contents', []);
    },

    addContent (content) {
        if (content) {
            this.get('contents').pushObject(content);
            content.set('parentModel', this);
        }
    },
    removeContent (content) {
        this.get('contents').removeObject(content);
        content.destroy();
    },
});
