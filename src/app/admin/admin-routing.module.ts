import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  AdminComponent, 
  ManageCrisisComponent, 
  ManageHeroesComponent, 
  AdminDashboardComponent 
} from './components';
import { AuthGuard } from '../auth/guard/auth.guard';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'crisis', 
            component: ManageCrisisComponent
          },
          {
            path: 'heroes',
            component: ManageHeroesComponent
          },
          {
            path: '',
            component: AdminDashboardComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
