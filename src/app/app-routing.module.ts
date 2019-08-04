import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteComponent} from './route/route.component';

const routes: Routes = [
  { path: '', component: RouteComponent},
  { path: '**', component: RouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
