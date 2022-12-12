import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:any[]= [
    {name:"Clothes",imageUrl:"1.png"},
    {name:"Accesstory",imageUrl:"2.png"},
    {name:"Makeup",imageUrl:"3.png"},
    {name:"Makeup",imageUrl:"3.png"}
  ]
  constructor(){}

   

}
