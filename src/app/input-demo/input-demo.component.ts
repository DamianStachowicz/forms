import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss'],
})
export class InputDemoComponent implements OnInit {
  title = 'forms';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      testInput: 'This field is read only',
    });
  }

  debug() {
    console.log({
      value: this.form.getRawValue(),
      valid: {
        login: this.form.get('login').valid,
        password: this.form.get('password').valid,
      },
    });
    this.form.reset({
      login: '',
      password: '',
      testInput: 'This field is read only',
    });
  }
}
