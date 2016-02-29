export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('test', {
      url: '/',
      templateUrl: 'app/test/test.html',
      controller: 'TestController',
      controllerAs: 'test'
    });

  $urlRouterProvider.otherwise('/');
}
