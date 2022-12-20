import { Component, OnInit, Type } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faMinusCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../model/recipe';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {



  // inputsArray: { ingredient: string }[] = [{ ingredient: "" }];
  // textsArray: { direction: string }[] = [{ direction: "" }];

  recipeObj: Recipe = {
    id: '',
    title: '',
    description: '',
    photo: '',
    ingredients: [],
    directions: [],
    servings: 0,
    prep_time: 0,
    cook_time: 0,
    prep_time_unit: '',
    cook_time_unit: '',
    author: ''
  }

  id:string = '';
  title:string = '';
  description:string = '';
  photo:string = '';
  ingredients:{ ingredient: string }[] = [{ ingredient: "" }];
  directions:{ direction: string }[] = [{ direction: "" }];
  servings:number = 0;
  prep_time:number  = 0;
  cook_time:number = 0;
  prep_time_unit:string = 'mins';
  cook_time_unit:string = 'mins';
  author = localStorage.getItem('user');

  removeIcon = faMinusCircle;
  addIcon = faPlus;







  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredients.push({ ingredient: "" });
  };


  removeIngredient(i: number) {
    this.ingredients.splice(i, 1);

  };

  addDirection() {
    this.directions.push({ direction: "" });
  };

  removeDirection(i: number) {
    this.directions.splice(i, 1);
  };


  onSubmit(form: NgForm) {
    
    this.recipeObj.id = '';
    this.recipeObj.title = this.title;
    this.recipeObj.description = this.description;
    this.recipeObj.photo = this.photo;
    this.recipeObj.ingredients = this.ingredients;
    this.recipeObj.directions = this.directions;
    this.recipeObj.servings = this.servings;
    this.recipeObj.prep_time = this.prep_time;
    this.recipeObj.cook_time = this.cook_time;
    this.recipeObj.prep_time_unit = this.prep_time_unit;
    this.recipeObj.prep_time_unit = this.cook_time_unit;
    this.recipeObj.author = this.author;


    this.data.addRecipe(this.recipeObj);
  

    form.reset();
  };



}
