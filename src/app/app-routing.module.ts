import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { ProyectsViewComponent } from './pages/proyects-view/proyects-view.component';

const routes: Routes = [
  { path: '', component: ProyectsViewComponent },
  { path: 'board', component: MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
