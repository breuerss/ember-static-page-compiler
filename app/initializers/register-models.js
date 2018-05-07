import Project from '../models/project';
import Page from '../models/page';
import Content from '../models/content';

export function initialize(application) {
    [Project, Page, Content].forEach(modelClass => {
        modelClass.reopen({
            container: application.__container__,
        });
    });
}

export default {
    name: 'register-models',
    initialize
};
