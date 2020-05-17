import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
/**
 * Wrapper around standard html input.
 * Changes it's appearance.
 */
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'number' | 'text' | 'password' = 'text';
  @Input() label: string;
  @Input() readonly = false;
  @Input() maxlength = 200;
  @Input() displayMaxLength = false;

  private innerValue = '';

  active = false;

  constructor() {}

  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.innerValue;
  }

  set value(val: string) {
    this.innerValue = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: string) {
    this.innerValue = value;
  }
}
