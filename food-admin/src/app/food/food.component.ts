import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodServiceService } from '../service/food-service.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  foods: any;
  title: string = '';
  errMessage: string = ''

  constructor(private _service: FoodServiceService) {
    this.getFoods();
  }

  getFoods() {
    this._service.getAllFoods().subscribe({
      next: (data) => { this.foods = data, this.title = 'All Foods' },
      error: (err) => { this.errMessage = err }
    })
  }

  getWellFoods() {
    this._service.getWellFoods().subscribe({
      next: (data) => { this.foods = data, this.title = 'Well Foods' },
      error: (err) => { this.errMessage = err }
    })
  }
}
