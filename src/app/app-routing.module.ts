import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

const routes: Routes = [
  { path: '', component: Route1Component },
  { path: 'route2', component: Route2Component },
  { path: 'route1', component: Route1Component },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }