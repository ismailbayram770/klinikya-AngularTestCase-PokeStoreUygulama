import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService } from 'src/app/model/rest.services';

@Component({
  selector: 'popularprodutcs',
  templateUrl: './popularprodutcs.component.html',
  styleUrls: ['./popularprodutcs.component.css']
})
export class PopularprodutcsComponent  implements OnInit   {

  pokemons:any[]=[];

  constructor(private servives:RestService,private router:Router){}

  ngOnInit():void
  {
    this.servives.getPokemon()
    .subscribe((response: any)=>{
      response.results.forEach((result:any) => {
        this.servives.getMorePokemon(result.name).subscribe((response:any)=>{
          this.pokemons.push(response)
          console.log(this.pokemons)
        });
      });
    });
    
  }

  OrderPage(){
    this.router.navigateByUrl('/orderpage');
  }

  
}
