import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CommonUtilModule } from './common-util/common-util.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatButtonModule,
    MatCheckboxModule,    
    HeroesModule,
    CrisisCenterModule,
    CommonUtilModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
