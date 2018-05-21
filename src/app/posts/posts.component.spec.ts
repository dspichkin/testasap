import * as angular from 'angular';

import { AppModule } from '../app.module';

describe ('PostsComponent', () => {
  let postsController;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($componentController: angular.IComponentControllerService) => {
    postsController = $componentController('posts', {}, {});
  }));

  it ('should create', () => {
    expect(postsController).toBeTruthy();
  });

});
