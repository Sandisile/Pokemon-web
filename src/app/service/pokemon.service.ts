import { Injectable } from "@angular/core";
import { from } from "rxjs";
import {HttpClient} from "@angular/common/http"
import { Pokemon, PokemonResponse } from "../domain/pokemon";

@Injectable({
providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) {

    }

    private readonly URL: string = "/api/pokemon"

    getPokemons(limit: number) : Promise<PokemonResponse> {

        return this.http.get<PokemonResponse>(this.URL, {params:{limit:limit}}).toPromise();
    }

    getPokemonByName(name: string): Promise<PokemonResponse> {

        return this.http.get<PokemonResponse>(this.URL+"/"+name).toPromise();
    }
}