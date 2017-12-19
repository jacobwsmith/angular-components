import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() label = 'switch';
  private innerValue = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.innerValue;
  }

  set value(val) {
    this.innerValue = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  switch() {
    this.value = !this.value;
  }
}
