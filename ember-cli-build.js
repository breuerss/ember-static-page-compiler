/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
        nodeModulesToVendor: [
            'node_modules/handlebars/dist/',
            'node_modules/jszip/dist/',
            'node_modules/file-saver/',
        ],
        'ember-bootstrap': {
            'bootstrapVersion': 4,
            'importBootstrapFont': false,
            'importBootstrapCSS': false
        }
    });

    app.import({
        development: 'vendor/handlebars.amd.js',
        production: 'vendor/handlebars.amd.min.js',
    }, {
        exports: {
            'handlebars': ['default']
        }
    });

    app.import({
        development: 'vendor/jszip.js',
        production: 'vendor/jszip.min.js',
    });

    app.import({
        development: 'vendor/FileSaver.js',
        production: 'vendor/FileSaver.min.js',
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return app.toTree();
};
