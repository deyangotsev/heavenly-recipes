import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../model/recipe';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipe-info-page',
  templateUrl: './recipe-info-page.component.html',
  styleUrls: ['./recipe-info-page.component.css']
})
export class RecipeInfoPageComponent implements OnInit {

  recipeId: any = '';
  retrievedRecipe: any;
  recipesList: any[] = [];



  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {


    this.data.getAllRecipes().subscribe({

      next: (ss) => {
        ss.docs.forEach((doc) => {
          this.recipesList.push(doc.data())
        })
      },
      complete: () => {
        this.activatedRoute.paramMap.subscribe((param) => {
          this.recipeId = param.get('id');
          this.retrievedRecipe = this.recipesList.find(x => x.id == this.recipeId);
          console.log(this.retrievedRecipe);
        })
      }
    })

  };









  deleteRecipe(recipe: Recipe) {
    if (window.confirm('Are you sure you want to delete this recipe ?')) {
      this.data.deleteRecipe(recipe);
    }
  }



}
