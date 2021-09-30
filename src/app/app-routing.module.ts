import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './Home/homepage/homepage.component'
// import { HomeRoutingModule } from './Home/home-routing.module'

const routes: Routes = [
    { path: '', component:  HomepageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 