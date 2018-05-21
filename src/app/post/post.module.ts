'use strict';

import * as angular from 'angular';

import { PostService } from './post.service';
import { PostComponent } from './post.component';
import { PostRoutes } from './post.routes';

let module: ng.IModule = angular.module('post', []);

module.config(PostRoutes);
module.service('postService', PostService);
module.component('post', PostComponent);

export const PostModule = module.name;
