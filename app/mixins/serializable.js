import Ember from 'ember';

export default Ember.Mixin.create({
    modelFactory: Ember.inject.service(),
    toNative() {
        const factory = this.get('modelFactory');
        let constructor = factory.getTypeForConstructor(this.constructor);

        return Object.assign({
            _constructor: constructor
        }, this);
    },

    toData () {
        let native = this.toNative();

        return Object.keys(native).reduce((obj, key) => {
            let value = native[key];
            if ((typeof value).match(/(string|number|boolean)/)) {
                obj[key] = value;
            } else if (Array.isArray(value)) {
                obj[key] = this.get(key).map(arrayValue => {
                    return arrayValue.toData();
                });
            }

            return obj;
        }, {});
    },

    fromData (data) {
        let factory = this.get('modelFactory');
        Object.keys(data).forEach(key => {
            if (key === '_constructor') {
                return;
            }

            let value = data[key];
            if ((typeof value).match(/(string|number|boolean)/)) {
                this.set(key, value);
            } else if (Array.isArray(value)) {
                this.set(key, value.map(arrayValue => {
                    let model = factory.create(arrayValue._constructor, {});
                    
                    model.fromData(arrayValue);
                    model.set('parentModel', this);
                    return model;
                }));
            }
        });

        return this;
    },

    toJson () {
        return JSON.stringify(this.toData());
    },

    fromJson (json) {
        return this.fromData(JSON.parse(json));
    },

});
