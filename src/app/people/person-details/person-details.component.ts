import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person;
  onDestroy = new Subject();

  constructor(private peopleService: PeopleService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  //   this.activeRoute.params.subscribe(params => {
  //     console.log(params);
  //   this.peopleService.getPersonById(+params.personId).subscribe(person => {
  //     this.person = person;
  //   });
  // });

  this.activeRoute.params
  .pipe(
    takeUntil(this.onDestroy),
    switchMap(params => this.peopleService.getPersonById(+params.personId))
  )
  .subscribe(person => {
    this.person = person;
  });

  this.activeRoute.queryParams.subscribe(console.log);
  }

  ngOnDestroy(){
    console.log('PersonDetailsComponent destroyed!!');
    this.onDestroy.next();
    this.onDestroy.complete();
    
  }
}
