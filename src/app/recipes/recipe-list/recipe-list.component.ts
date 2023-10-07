import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('a vegeterian pasta','with simple ingredients','https://img.jamieoliver.com/home/wp-content/uploads/features-import/2018/08/Classic_tomato_spaghetti_21638_630x420.jpg')
  ];

  constructor(){}

ngOnInit(): void {
  
}  

newRecipe(){
}
}