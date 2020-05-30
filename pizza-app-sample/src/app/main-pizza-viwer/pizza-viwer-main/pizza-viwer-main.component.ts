import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../pizza-service.service';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-pizza-viwer-main',
  templateUrl: './pizza-viwer-main.component.html',
  styleUrls: ['./pizza-viwer-main.component.scss']
})
export class PizzaViwerMainComponent implements OnInit {

  constructor(private pizzaService:PizzaServiceService) { }

  ngOnInit() {
  }

  get form() : FormGroup {
    return this.pizzaService.form;
  }

  get selectedPizzaGroup(): AbstractControl {
    if (!this.pizzaService.pizzasArray.length) return;
    return this.pizzaService.pizzasArray.at(this.form.get('selectedPizza').value);
  }

  onPizzaAdd() {
    this.pizzaService.addPizza();
    this.pizzaService.selectPizzaForEdit(this.pizzaService.pizzasArray.length - 1);
  }

}
