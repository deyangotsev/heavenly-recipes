import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent implements OnInit {

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
