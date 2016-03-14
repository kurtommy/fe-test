import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { TestController } from './test/test.controller';
import { RaceCarService } from '../app/components/race-car/race-car.service';
import { PaginationDirective } from './test/pagination.directive';

angular.module('feTest',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('raceCarService', RaceCarService)
  .directive('raceCarsPaginator', PaginationDirective)
  .controller('TestController', TestController);
