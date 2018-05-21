import {HeaderController } from './header.controller';
import './header.component.scss';

export const HeaderComponent: ng.IComponentOptions = {
  template  : require('./header.component.html'),
  controller: HeaderController,
};
