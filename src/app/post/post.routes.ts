export class PostRoutes {

  constructor ($stateProvider: ng.ui.IStateProvider) {
    'ngInject';

    $stateProvider.state('post', {
      url: '/post/{id}',
      component: 'post',
      resolve: {
        post: function(postService, $transition$) {
          return postService.getPost($transition$.params().id);
        }
      }
    });

  }
}
