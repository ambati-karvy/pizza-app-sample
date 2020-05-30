import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-select-viwer',
  templateUrl: './pizza-select-viwer.component.html',
  styleUrls: ['./pizza-select-viwer.component.scss']
})
export class PizzaSelectViwerComponent implements OnInit {
  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addPizza = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  get toppingsArray(): FormArray {
    if (!this.selectedPizzaGroup) return;

    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }

}
