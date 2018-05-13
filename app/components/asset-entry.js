import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['asset-entry'],
    actions: {
        deleteAsset () {
            this.sendAction('deleteAsset', this.get('asset'));
        },
    },
});
