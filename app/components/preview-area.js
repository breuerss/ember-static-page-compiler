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
    currentPage: null,
    renderedContent: Ember.computed('currentPage', function () {
        let compiled = '';

        const currentPage = this.get('currentPage');
        if (currentPage) {
            const template = currentPage.get('template');
            const data = currentPage.toNative();

            const compiler = this.get('templateCompiler');

            compiled = compiler.compile(template, data);
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
