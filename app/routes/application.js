import Ember from 'ember';

export default Ember.Route.extend({
    i18n: Ember.inject.service(),
    afterModel: function() {
        this.set('i18n.locale', navigator.language.split('-')[0]);
    }
});
