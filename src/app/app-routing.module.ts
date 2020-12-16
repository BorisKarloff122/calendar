import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegPageComponent} from './pages/reg-page/reg-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: RegPageComponent},
  {path: 'calendar', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
