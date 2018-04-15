import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
