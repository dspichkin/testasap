'use strict';

import * as angular from 'angular';

import { HeaderComponent } from './header.component';

let module: ng.IModule = angular.module('header', []);

module.component('myheader', HeaderComponent);

export const HeaderModule = module.name;
