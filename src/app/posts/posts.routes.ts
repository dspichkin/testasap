export class PostsRoutes {
  constructor ($stateProvider: ng.ui.IStateProvider) {
    'ngInject';

    $stateProvider.state('posts', {
      url: '/',
      component: 'posts',
      resolve: {
        posts: function(postsService) {
          return postsService.getPosts();
        }
      }
    });

  }
}
