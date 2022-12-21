import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent implements OnInit {


  recipesList: any[] = [];
  myrecipesList: any[] = [];
  uid: string | null = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.uid = localStorage.getItem('user');

    this.data.getAllRecipes().subscribe(
      {
        next: (ss) => {
          ss.docs.forEach((doc) => {
            this.recipesList.push(doc.data());
          });

          
        },

        complete: () => {
          this.recipesList.forEach(x => {
            this.myrecipesList.push(x);
          })

          this.myrecipesList = this.myrecipesList.filter(x => x.author == this.uid);
        }

      })




   

  }


}
