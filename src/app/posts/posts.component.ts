import { PostsController } from './posts.controller';
import './posts.component.scss';

export const PostsComponent: ng.IComponentOptions = {
  template  : require('./posts.component.html'),
  controller: PostsController,
  bindings: { posts: '<' }
};
