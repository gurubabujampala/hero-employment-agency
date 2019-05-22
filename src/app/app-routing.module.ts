import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent, ComposeMessageComponent } from './common-util/components';


const appRoutes: Routes = [
  // {
  //   path:'crisis-center', 
  //   component: CrisisListComponent
  // },
  // {
  //   path:'heroes',
  //   component: HeroListComponent
  // },

  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path:'',
    redirectTo:'heroes',
    pathMatch:'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
