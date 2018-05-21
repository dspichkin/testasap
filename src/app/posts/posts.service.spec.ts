import * as angular from 'angular';

import { AppModule } from './app.module';
import { PostsService } from './posts.service';

describe ('PostsService', () => {
  let postsService: PostsService;

  angular.mock.module.sharedInjector();

  beforeAll (angular.mock.module(AppModule));

  beforeAll (angular.mock.inject(($injector: angular.auto.IInjectorService) => {
    postsService = $injector.get<PostsService>('postsService');
  }));

  it ('should create', () => {
    expect(postsService).toBeTruthy();
  });

});
