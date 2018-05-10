import Ember from 'ember';
import Project from '../models/project';
import Page from '../models/page';
import Content from '../models/content';

const switchObj = {
    project: Project,
    page: Page,
    content: Content,
};

export default Ember.Service.extend({
    create (type, settings) {
        settings = settings || {};

        let model = null;
        const constructor = switchObj[type];
        if (constructor !== undefined) {
            model = constructor.create(settings);
        }

        return model;
    },

    is (model, type) {
        return switchObj[type].prototype.isPrototypeOf(model);
    },

    getTypeForConstructor (constructor) {
        return Object.keys(switchObj).find(key => {
            return constructor === switchObj[key];
        });
    },

});
