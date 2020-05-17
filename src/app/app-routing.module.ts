import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SelectBoxDemoComponent } from './select-box-demo/select-box-demo.component';

const routes: Routes = [
  { path: 'input', component: InputDemoComponent },
  { path: 'select', component: SelectBoxDemoComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
