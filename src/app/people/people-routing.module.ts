import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
{   path: 'people', 
    component: PeopleListComponent, 
    children: [
        {path:':personId', component: PersonDetailsComponent}
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PeopleRoutingModule{}