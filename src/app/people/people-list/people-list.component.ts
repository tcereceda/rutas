import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('PeopleListComponent destroyed!!');
  }
}
