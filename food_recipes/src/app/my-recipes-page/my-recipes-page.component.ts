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
  isEmpty: boolean = false;

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
        error: (err) => {
          alert(err);
        },
        complete: () => {
          this.recipesList.forEach(x => {
            this.myrecipesList.push(x);
          })

          this.myrecipesList = this.myrecipesList.filter(x => x.author == this.uid);

          if(this.myrecipesList.length != 0) {
            this.isEmpty = true;
          } 
        }

      })




   

  }


}
