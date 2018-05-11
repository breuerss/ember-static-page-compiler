import Handlebars from 'handlebars';
export function initialize() {
    Handlebars.registerHelper('render-contents', function (context) {
        let rendered = context.reduce((rendered, model) => {
            const template = Handlebars.compile(model.get('template'));
            const data = model.toNative();
            return rendered + template(data);
        }, '');

        return rendered;
    });
}

export default {
  name: 'register-handlebars-helper',
  initialize
};
