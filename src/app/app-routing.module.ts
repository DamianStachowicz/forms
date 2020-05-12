import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDemoComponent } from './input-demo/input-demo.component';

const routes: Routes = [
  { path: 'input', component: InputDemoComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
