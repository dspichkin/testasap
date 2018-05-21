import { PostController } from './post.controller';
import './post.component.scss';

export const PostComponent: ng.IComponentOptions = {
  template  : require('./post.component.html'),
  controller: PostController,
  bindings: { post: '<' }
};
