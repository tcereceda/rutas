import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
import { Location } from "@angular/common";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  person;
  showDetails;

  onDestroy = new Subject();

  constructor(    
    private activeRoute: ActivatedRoute,
    private router: Router,
    public location: Location
    ) { }

  ngOnInit() {
    this.activeRoute.data
      .pipe(
        takeUntil(this.onDestroy)
      )
      .subscribe(routeData => {
        
        if (routeData.person)
        {
          this.person = routeData.person;
        } else {
          this.router.navigateByUrl('/home');
        }

        this.showDetails = routeData.showDetails;
      });

  //   this.activeRoute.params.subscribe(params => {
  //     console.log(params);
  //   this.peopleService.getPersonById(+params.personId).subscribe(person => {
  //     this.person = person;
  //   });
  // });

  // this.activeRoute.params
  // .pipe(
  //   takeUntil(this.onDestroy),
  //   switchMap(params => this.peopleService.getPersonById(+params.personId))
  // )
  // .subscribe(person => {
  //   this.person = person;
  // });

  // this.activeRoute.queryParams.subscribe(console.log);
   }

  ngOnDestroy(){
    console.log('PersonDetailsComponent destroyed!!');
    this.onDestroy.next();
    this.onDestroy.complete();
    
  }

  goBack(){
    //this.location.back();
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
    //this.router.navigateByUrl('../', {relativeTo: this.activeRoute});
  }
}
