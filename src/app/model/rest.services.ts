import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";




@Injectable()
export class RestService{

    constructor(private http:HttpClient){}

    baseurl:string="https://pokeapi.co/api/v2/pokemon?limit=4&offset=0";

    getPokemon():Observable<any>{
        return this.http.get(this.baseurl)
    }

    getMorePokemon(name:string):Observable<any>{
        return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
    }
}