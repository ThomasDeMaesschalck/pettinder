import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _pets: string;

  constructor(private http: HttpClient) {
    this._pets = `${environment.backendUrl}/pets`;
  }

  get pets(): string {
    return this.pets;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._pets)
      .pipe(map(response => response.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      })));
  }
}
