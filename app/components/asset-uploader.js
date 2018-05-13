import Ember from 'ember';

export default Ember.Component.extend({
    modelFactory: Ember.inject.service(),
    tagName: 'input',
    attributeBindings: ['type'],
    type: 'file',
    classNames: ['asset-uploader'],
    change (event) {
        const input = Ember.$(event.target)[0];
        const fileList = input.files;
        const length = fileList.length;
        let i = 0;

        for (; i < length; i = i + 1) {
            const file = fileList[i];
            const asset = this.get('modelFactory').create('asset');
            asset.set('size', file.size);
            asset.set('name', file.name);
            asset.set('type', file.type);
            const reader = new FileReader ();
            reader.onload = function (e) {
                asset.set('data', e.target.result);
            }
            reader.readAsDataURL(file);
            
            this.get('assets').pushObject(asset);
        }

        Ember.$(input).val('');
    },
});
