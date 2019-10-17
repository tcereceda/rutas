import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleUrl = 'api/people'
  
  constructor(
    private http: HttpClient) { }

  


  getPersonById(id:number){
    const personUrl = `${this.peopleUrl} `;
    //return of(this.people.find(x => x.id === id));
  }

  getPeople():Observable<any>{
    console.log('hola');
    return this.http.get(this.peopleUrl);
    //return of(this.people);
  }
}
