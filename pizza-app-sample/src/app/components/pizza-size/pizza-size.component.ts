import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PizzaSizeEnum } from '../service/pizza-form.interface';

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => PizzaSizeComponent),
  //     multi: true
  //   }
  // ]
})
export class PizzaSizeComponent implements ControlValueAccessor {
  pizzaSize: PizzaSizeEnum;
  PizzaSizeEnum = PizzaSizeEnum;

  constructor() { }

  changeSize(size: PizzaSizeEnum) {alert(size)
    this.pizzaSize = size;
    this.propagateChange(size);
  }

  propagateChange = (value: PizzaSizeEnum) => {};
  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
