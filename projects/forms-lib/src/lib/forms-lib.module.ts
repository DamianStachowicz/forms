import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent],
})
export class FormsLibModule {}
