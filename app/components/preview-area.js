import Ember from 'ember';
import Hideable from '../mixins/hideable';

export default Ember.Component.extend(Hideable, {
    classNames: ['preview-area'],
    classNameBindings: [
        'hidden:hide',
        'fullscreen',
        'fullscreen:col-md-12:col-md',
        'fullscreen:fixed-top',
    ],
    fullscreen: false,

    templateCompiler: Ember.inject.service(),
    projectManager: Ember.inject.service(),

    currentPage: Ember.computed.alias('projectManager.selectedPage'),
    renderedContent: Ember.computed(
        'currentPage',
        'currentPage.changed', function () {
        let compiled = '';

        const currentPage = this.get('currentPage');
        if (currentPage) {
            currentPage.get('changed');
            const compiler = this.get('templateCompiler');
            compiled = compiler.compileModel(currentPage);
        }

        return compiled;
    }),

    actions: {
        toggleVisibility () {
            this._super(...arguments);
            this.set('fullscreen', false);
        },
        toggleFullscreen () {
            this.toggleProperty('fullscreen');
            this.set('hidden', false);
        },
    }
});
