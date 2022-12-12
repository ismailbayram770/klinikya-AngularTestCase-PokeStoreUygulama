import { Component, OnInit,Input } from '@angular/core';
import { RestService } from 'src/app/model/rest.services';

@Component({
  selector: 'recentlyvisited',
  templateUrl: './recentlyvisited.component.html',
  styleUrls: ['./recentlyvisited.component.css']
})
export class RecentlyvisitedComponent implements OnInit {

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
