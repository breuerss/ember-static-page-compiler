import Renderable from './renderable';
import Ember from 'ember';

export default Renderable.extend({
    title: '',
    content: '',
    template: [
        '<h2>{{title}}</h2>',
        '<p>{{content}}</p>',
    ].join(''),
    toggle: false,
    changed: Ember.computed('title', 'content', 'template', function () {
        this.toggleProperty('toggle');
        return this.get('toggle');
    }),
});
