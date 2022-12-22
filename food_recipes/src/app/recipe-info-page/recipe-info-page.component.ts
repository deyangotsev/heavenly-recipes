import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Recipe } from '../model/recipe';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipe-info-page',
  templateUrl: './recipe-info-page.component.html',
  styleUrls: ['./recipe-info-page.component.css']
})
export class RecipeInfoPageComponent implements OnInit {

  recipeId: any = '';
  retrievedRecipe: any = '';
  recipesList: any[] = [];
  firebaseDocs: any[] = [];
  isLoggedIn: boolean = false



  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {


    this.data.getAllRecipes().subscribe({

      next: (ss) => {
        ss.docs.forEach((doc) => {
          this.firebaseDocs.push(doc);
          this.recipesList.push(doc.data())
        })
      },
      error: (err) => {
        alert(err);
      },
      complete: () => {
        this.activatedRoute.paramMap.subscribe((param) => {
          this.recipeId = param.get('id');
          this.retrievedRecipe = this.recipesList.find(x => x.id == this.recipeId);
        })
      }
    });

    if(localStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
    }

  };





  async deleteRecipe() {

  
  // if (window.confirm('Are you sure you want to delete this recipe ?')) {
    //   this.data.deleteRecipe(recipeId);
    // }

    //  if(window.confirm('Are you sure you want to delete this recipe ?')) {
    //   await this.data.deleteRecipe(this.recipeId).then(() => {this.router.navigate([''])})

    let recipeToDelete = this.firebaseDocs.find( x => x.data().id == this.recipeId).id;
  

    try {
      await this.data.deleteRecipe(recipeToDelete);
      this.router.navigate(['/recipes'])
    } catch (err) {
      alert('Something went wrong' + err);
    }
   
    
    
  }



}
