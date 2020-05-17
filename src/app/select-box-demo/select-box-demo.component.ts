import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-box-demo',
  templateUrl: './select-box-demo.component.html',
  styleUrls: ['./select-box-demo.component.scss'],
})
export class SelectBoxDemoComponent {
  form: FormGroup;
  options = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 1 abc' },
    { label: 'Option 2 abc' },
    { label: 'Option 3 abc' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      select: null,
    });
  }
}
