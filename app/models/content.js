import Renderable from './renderable';

export default Renderable.extend({
    title: '',
    content: '',
    template: [
        '<h2>{{title}}</h2>',
        '<p>{{content}}</p>',
    ].join('')
});
