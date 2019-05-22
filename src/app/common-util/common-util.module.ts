import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUtilRoutingModule } from './common-util-routing.module';
import { PageNotFoundComponent } from './components';
import { MessageService } from './service';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonUtilRoutingModule
  ],
  providers:[
    MessageService
  ]
})
export class CommonUtilModule { }
