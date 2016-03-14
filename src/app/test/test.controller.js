export class TestController {
  constructor($scope, raceCarService) {
    'ngInject';

    this.cars = [];
    this.rc_service = raceCarService;

    // load data
    this.cars = this.loadCars(100);


    //$scope.cars = this.cars;
  }

  loadCars(howMany)
  {
    return this.rc_service.getCars(howMany);
  }
}
