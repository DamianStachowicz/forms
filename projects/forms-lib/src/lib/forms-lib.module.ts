import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [InputComponent, SelectBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, SelectBoxComponent],
})
export class FormsLibModule {}
