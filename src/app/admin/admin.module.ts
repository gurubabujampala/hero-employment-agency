import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { 
  AdminDashboardComponent, 
  AdminComponent, 
  ManageCrisisComponent, 
  ManageHeroesComponent 
} from './components';

@NgModule({
  declarations: [
    AdminDashboardComponent, 
    AdminComponent, 
    ManageCrisisComponent, 
    ManageHeroesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
