//import { config } from './index.config';
//import { routerConfig } from './index.route';
//import { runBlock } from './index.run';
//import { TestMeController } from './test-me/test-me.controller';
//import { RaceCarService } from '../app/components/race-car/race-car.service';
//import { RaceCarsPagination } from '../app/components/race-car/race-car-paggination';
//
//angular.module('feTest',
//  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
//  .config(config)
//  .config(routerConfig)
//  .run(runBlock)
//  .service('raceCarService', RaceCarService)
//  .controller('TestMeController', TestMeController)
//.directive('raceCarPagination', RaceCarsPagination);
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { TestMeController } from './test-me/test-me.controller';
import { RaceCarService } from '../app/components/race-car/race-car.service';
import { RaceCarsPagination } from '../app/components/race-car/race-car-paggination';

angular.module('feTest',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr', 'angularUtils.directives.dirPagination'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('raceCarService', RaceCarService)
  .controller('TestMeController', TestMeController)
  .directive('raceCarPagination', RaceCarsPagination);