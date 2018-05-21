import * as angular from 'angular';

import '../vendor';

import { AppConfig } from './app.config';
import { AppRoutes } from './app.routing';
import { PostsModule } from './posts/posts.module';
import { PostModule } from './post/post.module';
import { HeaderModule } from './header/header.module';

let module: ng.IModule = angular.module('test4', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngCookies',
  'ui.router',
  'restangular',
  'oc.lazyLoad',
  PostsModule,
  PostModule,
  HeaderModule
]);

module.constant('ENVIRONMENT', ENV);
module.constant('CONFIG', CONFIG);

module.config(AppConfig);
module.config(AppRoutes);

export const AppModule = module.name;
