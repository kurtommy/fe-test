export class RaceCarService {
  constructor () {
    'ngInject';

    this._carModels = [
      {
        'maker': 'Ferrari',
        'model': 'California'
      },
      {
        'maker': 'Lamborghini',
        'model': 'Aventador'
      },
      {
        'maker': 'Maserati',
        'model': 'Quattroporte'
      }
    ];

  }

  getCars(limit = 100) {
    let cars = [];
    for (let i = 0; i < limit; i++) {
      cars[i] = angular.copy(this._carModels[Math.floor(Math.random() * 10 % 3)]);
      cars[i].id = i;
    }
    return cars;
  }
  
}

                