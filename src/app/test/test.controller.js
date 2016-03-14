export class TestController {
  constructor($scope, raceCarService) {
    'ngInject';

    this.cars = [];
    this.rc_service = raceCarService;

    // load data
    this.cars = this.loadCars(299);

    //scope
    $scope.cars = this.cars;
    $scope.amount = this.cars.length;
    $scope.page = 1;
    $scope.per_page = 10;
    $scope.pages = Math.ceil($scope.amount / $scope.per_page);
  }

  loadCars(howMany)
  {
    return this.rc_service.getCars(howMany);
  }
}
