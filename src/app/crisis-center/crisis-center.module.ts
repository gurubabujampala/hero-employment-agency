import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { 
  CrisisListComponent, 
  CrisisDetailComponent, 
  CrisisCenterHomeComponent, 
  CrisisCenterComponent 
} from './components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
