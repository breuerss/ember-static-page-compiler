/* eslint no-control-regex: off */
/* global JSZip, saveAs */
import Ember from 'ember';

export default Ember.Service.extend({
    templateCompiler: Ember.inject.service(),

    export (project) {
        const zip = new JSZip();
        const projectName = this.getSaveFileName(project.get('name'));

        this.renderPagesToFolder(zip, project.get('pages'), projectName);
        this.saveAssetsInZip(zip, project.get('assets'));

        zip.generateAsync({type:"blob"})
        .then(function(content) {
            saveAs(content, projectName + '.zip');
        });
    },

    getSaveFileName(name) {
        name = name.replace(/[^\x00-\x7F]/g, "");
        name = name.replace(/ /g, "_");
        return name;
    },

    renderPagesToFolder(zip, pages, folderName) {
        let folder = zip.folder(folderName);
        const compiler = this.get('templateCompiler');
        pages.forEach(page => {
            const fileName = this.getSaveFileName(page.get('title'));

            let subPages = page.get('pages');
            if (subPages.length > 0) {
                this.renderPagesToFolder(folder, subPages, fileName);
            }

            const content = compiler.compileModel(page);
            folder.file(fileName + '.html', content);
        });
    },

    saveAssetsInZip(zip, assets) {
        const assetsFolder = zip.folder('assets');
        assets.forEach(asset => {
            const file = this.createFileFromData(asset.get('data'), asset.get('type'));
            assetsFolder.file(asset.get('name'), file);
        });
    },

    createFileFromData(data, type) {
        const byteCharacters = atob(data.replace(/^data:.*?;base64,/, ''));
        const length = byteCharacters.length;
        var byteNumbers = new Array(length);
        for (var i = 0; i < length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: type });
    },

});
