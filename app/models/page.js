import Renderable from './renderable';
import PageContainer from '../mixins/page-container';
import ContentContainer from '../mixins/content-container';
import Ember from 'ember';

export default Renderable.extend(PageContainer, ContentContainer, {
    title: '',
    contents: [],
    template: [
        '<html>',
            '<head>',
            '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">',
            '</head>',
            '<body>',
                '<h1>{{ title }}</h1>',
                '{{#render-contents contents }}{{/render-contents}}',
            '</body>',
        '</html>',
    ].join('\n'),
    toggle: false,
    changed: Ember.computed('title', 'template', 'contents.@each.changed', function () {
        this.toggleProperty('toggle');
        this.get('contents').filterBy('changed', false);

        return this.get('toggle');
    }),
});
