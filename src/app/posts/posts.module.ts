'use strict';

import * as angular from 'angular';

import { PostsService } from './posts.service';
import { PostsComponent } from './posts.component';
import { PostsRoutes } from './posts.routes';

let module: ng.IModule = angular.module('posts', []);

module.config(PostsRoutes);

module.service('postsService', PostsService);

module.component('posts', PostsComponent);

export const PostsModule = module.name;
