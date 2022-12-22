import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }



  //add recipe to FireStore
   addRecipe(recipe: Recipe) {
    recipe.id = this.afs.createId();
    return this.afs.collection('/Recipes').add(recipe);
  }

  //get all Recipes
   getAllRecipes() {
    return this.afs.collection('/Recipes').get(); //maybe i should use .valueChanges() instead of get to check for new posts ?
    
  }


  //delete Recipe
 deleteRecipe(recipeId: any) {
    return this.afs.collection('/Recipes').doc(recipeId).delete();
   
    
    // 
  }

  // not sure if this is the way
  // editRecipe(recipe: Recipe) {
  //   this.deleteRecipe(recipe);
  //   this.addRecipe(recipe);
  // }
}