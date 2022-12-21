import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  // recipesList: any[] = [];
  // myrecipesList: any[] = [];
  // uid: string | null = '';

  // constructor(private data: DataService) { }

  // ngOnInit(): void {

  //   this.uid = localStorage.getItem('user');

  //   this.data.getAllRecipes().subscribe((ss) => {
  //     ss.docs.forEach((doc) => {
  //       this.recipesList.push(doc.data());
  //     });
  //   });

  // this.myrecipesList = this.recipesList.filter(x => {
  //   x.author === this.uid;   
  // })

  // }

  // show() {
  //   console.log(this.myrecipesList);
  // }

  recipesList: any[] = [];


  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.getAllRecipes().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        console.log(doc)
        this.recipesList.push(doc.data());
      });
    });
  }

  
}

