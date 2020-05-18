import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectBoxComponent),
      multi: true,
    },
  ],
})
export class SelectBoxComponent implements OnChanges {
  @Input() displayMaxLength = false;
  @Input() label: string;
  /**
   * name of the parameter to be used as option label
   */
  @Input() exact = true;
  @Input() labelKey = 'label';
  @Input() maxlength = 200;
  @Input() options: any[];
  @Input() readonly = false;

  private innerValue = '';

  active = false;
  filteredOptions = [];
  highlighted = null;
  inputValue = '';

  constructor() {}

  ngOnChanges() {
    this.filteredOptions = this.options;
  }

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

  select(option) {
    this.value = option;
    this.inputValue = option[this.labelKey];
    this.active = false;
  }

  highlight(option) {
    this.highlighted = option;
  }

  moveHighlightDown() {
    const idx = this.filteredOptions.indexOf(this.highlighted);
    if (idx < this.filteredOptions.length - 1) {
      this.highlighted = this.filteredOptions[idx + 1];
    }
  }

  moveHighlightUp() {
    const idx = this.filteredOptions.indexOf(this.highlighted);
    if (idx > 0) {
      this.highlighted = this.filteredOptions[idx - 1];
    }
  }

  isHighlighted(option) {
    return JSON.stringify(option) === JSON.stringify(this.highlighted);
  }

  filterOptions(query: string) {
    // making sure the list is visible
    this.active = true;

    this.filteredOptions = !!query
      ? this.options.filter((option) =>
          (option.label as string).toLowerCase().includes(query.toLowerCase())
        )
      : this.options;
  }

  cancel() {
    this.active = false;
    this.inputValue = this.innerValue[this.labelKey];
  }
}
