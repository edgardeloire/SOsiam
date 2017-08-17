import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core'
import  {HomeComponent} from './components/home/home.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {RegisterComponent} from "./components/register/register.component"


// Routesi
const appRoutes: Routes = [

  { path: 'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  exports: [RouterModule],

})
export class AppRoutingModule { }
