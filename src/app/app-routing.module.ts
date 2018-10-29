import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './header/add/add.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  // {path: '', component:AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [AddComponent];
