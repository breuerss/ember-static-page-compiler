import Handlebars from 'handlebars';
import Ember from 'ember';
export function initialize(application) {
    Handlebars.registerHelper('render-contents', function (context) {
        let rendered = context.reduce((rendered, model) => {
            const template = Handlebars.compile(model.get('template'));
            const data = model.toNative();
            return rendered + template(data);
        }, '');

        return rendered;
    });

    Handlebars.registerHelper('asset', function (assetName) {
        const container = application.__container__;
        let projectManager = container.lookup('service:projectManager');
        let templateCompiler = container.lookup('service:templateCompiler');
        let assets = projectManager.get('selectedProject').get('assets');

        let assetData = null;
        if (assets) {
            let asset = assets.filter(asset => {
                return asset.get('name') === assetName;
            });

            if (asset.length === 1) {
                if (templateCompiler.get('preview')) {
                    assetData = asset[0].data;
                } else {
                    assetData = '/assets/' + asset[0].name;
                }
            }
        }

        return assetData;
    });
}

export default {
  name: 'register-handlebars-helper',
  initialize
};
