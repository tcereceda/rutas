import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const people = [
      {
        id: 1,
        name: 'Teresa'
      },
      {
        id: 2,
        name: 'Pilar'
      }
    ];

    return {people};
  }
    
}
