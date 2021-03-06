import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes, PreloadingStrategy, PreloadAllModules} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleModule } from './people/people.module';
import { ContactsModule } from './contacts/contacts.module';
import { CustomRoutePreloader } from './custom-route-preloader';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

const routes:Routes= [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'people', 
   loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
   canLoad: [AuthGuard]
  },
  {
    path: 'contacts', 
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
    data:{
      preload: true
    },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
   {path: '**' , component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(routes,
      {preloadingStrategy: CustomRoutePreloader}),
     
    
  ],
  providers: [CustomRoutePreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
