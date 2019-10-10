import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleService } from './people.service';

@Injectable()

export class PeopleDataResolver implements Resolve<any> {
    constructor(private peopleService: PeopleService){}
    
    // Valor en ese momento
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       return this.peopleService.getPersonById(+route.params.personId);
  }

}