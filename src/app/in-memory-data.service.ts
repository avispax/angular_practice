import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      { id: 11, name: 'Man RED' },
      { id: 12, name: 'Juventus' },
      { id: 13, name: 'A.C.Milan' },
      { id: 14, name: 'intel' },
      { id: 15, name: 'Man City' },
      { id: 16, name: 'Chelsea' },
      { id: 17, name: 'Real Madrid' },
      { id: 18, name: 'Barcerona' },
      { id: 19, name: 'Byern Munchen' },
      { id: 20, name: 'Avispa' }
    ];
    return { heroes };
  }

  constructor() { }

  getId(heroes: Hero[]) : number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
