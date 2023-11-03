import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HraderComponent } from './hrader/hrader.component';
import { BodyComponent } from './body/body.component';
import { BodyaboutComponent } from './bodyabout/bodyabout.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'home',component:BodyComponent},
  {path:'about',component:BodyaboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
