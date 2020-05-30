import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { PizzaSizeEnum, IToppingItem,IPizzaItem } from '../service/pizza-form.interface';
import { PizzaServiceService } from 'src/app/main-pizza-viwer/pizza-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  @Input() group: FormGroup;

  @Output() deletePizza = new EventEmitter<number>();
  @Output() addPizza = new EventEmitter();
  @Output() pizzaSelected = new EventEmitter<number>();

  constructor(private pizzaService: PizzaServiceService) { }

  ngOnInit() {
  }

  get pizzasArray(): FormArray {
    return this.group.get('pizzas') as FormArray;
  }

  getPizzaListItemClassStates(pizza: AbstractControl, index: number) {
    return {
      'PizzaList__item--active': this.group.get('selectedPizza').value === index,
      'PizzaList__item--has-error': !pizza.valid && pizza.dirty
    };
  }


  getPizzaTitle(pizza: IPizzaItem): string {
    const selectedToppings = this.pizzaService
      .getSelectedToppings((pizza.toppings as IToppingItem[]))
      .map(i => i.name);

    const toppingsString = this.getToppingsString(selectedToppings);
    const sizeString = this.getPizzaSizeTitle(pizza.size);

    return `${sizeString} pizza ${toppingsString}`;
  }

  private getToppingsString(toppings: string[]): string {
    if (!toppings || !toppings.length) return '';

    return `- ${toppings.toString()}`;
  }

  private getPizzaSizeTitle(size: PizzaSizeEnum): string {
    let pizzaSize;
    switch (size) {
      case PizzaSizeEnum.SMALL:
        pizzaSize = 'S';
        break;
      case PizzaSizeEnum.MEDIUM:
        pizzaSize = 'M';
        break;
      case PizzaSizeEnum.LARGE:
        pizzaSize = 'L';
        break;
    }

    return pizzaSize;
  }

}
