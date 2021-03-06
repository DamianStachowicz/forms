import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsLibModule } from 'projects/forms-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { SelectBoxDemoComponent } from './select-box-demo/select-box-demo.component';

@NgModule({
  declarations: [AppComponent, InputDemoComponent, SelectBoxDemoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
