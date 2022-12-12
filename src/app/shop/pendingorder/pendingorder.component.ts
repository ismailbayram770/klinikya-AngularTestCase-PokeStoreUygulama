import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/model/rest.services';

@Component({
  selector: 'app-pendingorder',
  templateUrl: './pendingorder.component.html',
  styleUrls: ['./pendingorder.component.css']
})
export class PendingorderComponent implements OnInit{
  @Input() selectedpokemon:any[]= [];
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
