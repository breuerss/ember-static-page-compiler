import Renderable from './renderable';
import PageContainer from '../mixins/page-container';
import ContentContainer from '../mixins/content-container';

export default Renderable.extend(PageContainer, ContentContainer, {
    title: '',
    contents: [],
});
