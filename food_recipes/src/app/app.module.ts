import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateRecipePageComponent } from './create-recipe-page/create-recipe-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { RecipeInfoPageComponent } from './recipe-info-page/recipe-info-page.component';
import { LinkGuardService } from './shared/link-guard.service';
import { AuthService } from './shared/auth.service';
import { MyRecipesPageComponent } from './my-recipes-page/my-recipes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateRecipePageComponent,
    RecipesPageComponent,
    RecipeInfoPageComponent,
    MyRecipesPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [LinkGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
