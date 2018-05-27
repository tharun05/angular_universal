import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {PeriodicElement} from '../../apex/entities/table.interface'
// import { User } from '../../apex/entities/tableData.model';

@Injectable()
export class TableDataService {
  user: PeriodicElement[] = [
    {
    id: 1,
    name: 'Scissors',
    type: 'mail',
    status:true,
    date: Date.now(),
    },
  ]
 
  constructor() {}

  getRecipes() {
    return this.user.slice();
  }

  addIngredient(user) {
    this.user.push(user);
    console.log(this.user)
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }
//   addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipesChanged.next(this.recipes.slice());
//   }


//   deleteRecipe(index: number) {
//     this.recipes.splice(index, 1);
//     this.recipesChanged.next(this.recipes.slice());
//   }
}
