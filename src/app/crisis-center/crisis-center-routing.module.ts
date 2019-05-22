import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  CrisisListComponent, 
  CrisisDetailComponent, 
  CrisisCenterComponent, 
  CrisisCenterHomeComponent 
} from './components';

const crisisRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
