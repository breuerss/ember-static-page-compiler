import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['asset-manager'],
    actions: {
        deleteAsset(asset) {
            this.get('assets').removeObject(asset);
            asset.destroy()
        },
    },
});
