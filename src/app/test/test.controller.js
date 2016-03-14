export class TestController {
  constructor(raceCarService) {
    'ngInject';

    this.cars = [];
    this.rc_service = raceCarService;

    // load data
    this.cars = this.loadCars(100);

    console.log(this.cars);



  }

  loadCars(howMany)
  {
    return this.rc_service.getCars(howMany);
  }
}
