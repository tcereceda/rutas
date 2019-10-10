import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDataResolver } from './people-data.resolver';

const routes: Routes = [
{   path: '', 
    component: PeopleListComponent, 
    children: [
        {path:':personId', 
        component: PersonDetailsComponent,
        resolve: {person: PeopleDataResolver},
        data: {showDetails:true}
        }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PeopleRoutingModule{}