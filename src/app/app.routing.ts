export class AppRoutes {
  constructor ($urlRouterProvider: ng.ui.IUrlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

  }
}
