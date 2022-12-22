import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {



  recipesList: any[] = [];


  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.getAllRecipes().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.recipesList.push(doc.data());
      });
    });
  }

  
}

