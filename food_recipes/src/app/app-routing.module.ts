import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecipePageComponent } from './create-recipe-page/create-recipe-page.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeInfoPageComponent } from './recipe-info-page/recipe-info-page.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'addrecipe', component: CreateRecipePageComponent},
  {path: 'recipes', component:RecipesPageComponent},
  {path: 'recipes/recipe/:id', component: RecipeInfoPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
