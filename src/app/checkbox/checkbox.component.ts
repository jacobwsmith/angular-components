import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  private innerValue = false;

  onChange: any = val => {
    console.log('-- onChange --');
  };
  onTouched: any = () => {
    console.log('-- onTouched --');
  };

  get value() {
    console.log('-- get value --');
    return this.innerValue;
  }

  set value(val) {
    console.log('-- get value --');
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChange(val);
      this.onTouched();
    }
  }

  registerOnChange(fn) {
    console.log('-- registerOnChange --');
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    console.log('-- registerOnTouched --');
    this.onTouched = fn;
  }

  /**
   * Writes a new value to the element.
   *
   * This method will be called by the forms API to write to the view when programmatic
   * (model -> view) changes are requested.
   *
   * Example implementation of `writeValue`:
   *
   * ```ts
   * writeValue(value: any): void {
   *   this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
   * }
   * ```
   */
  writeValue(value) {
    console.log('writeValue: ', value);
    if (value !== this.innerValue) {
      console.log('yep')
      this.innerValue = value;
    }
  }

  switch() {
    console.log('-- switch --');
    this.value = !this.value;
  }
}
