import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['preview-area'],
    classNameBindings: [
        'hidden:hide',
        'fullscreen',
        'fullscreen:col-md-12:col-md',
        'fullscreen:fixed-top',
    ],
    hidden: false,
    fullscreen: false,

    templateCompiler: Ember.inject.service(),
    projectManager: Ember.inject.service(),

    currentPage: Ember.computed.alias('projectManager.selectedPage'),
    renderedContent: Ember.computed('currentPage', function () {
        let compiled = '';

        const currentPage = this.get('currentPage');
        if (currentPage) {
            const compiler = this.get('templateCompiler');
            compiled = compiler.compileModel(currentPage);
        }

        return compiled;
    }),

    actions: {
        toggleVisible () {
            this.toggleProperty('hidden');
            this.set('fullscreen', false);
        },
        toggleFullscreen () {
            this.toggleProperty('fullscreen');
            this.set('hidden', false);
        },
    }
});
