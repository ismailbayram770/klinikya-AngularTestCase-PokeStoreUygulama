import { Component } from '@angular/core';
import { RestService } from 'src/app/model/rest.services';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {

  pokemons:any[]=[];
  constructor(private servives:RestService){}

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

}
