import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function() {
    this.route('project', function() {
      this.route('edit');
    });

    this.route('page', function() {
      this.route('edit');
    });
});

export default Router;
