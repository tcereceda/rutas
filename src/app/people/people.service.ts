import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people = [
    {
      id: 1,
      name: 'Teresa'
    },
    {
      id: 2,
      name: 'Pilar'
    }
  ]

  getPersonById(id:number){
    return of(this.people.find(x => x.id === id));
  }

  getPeople(){
    return of(this.people);
  }
}
