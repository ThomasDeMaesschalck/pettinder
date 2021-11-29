import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private _petsBackend: string;

  constructor(private http: HttpClient) {
    this._petsBackend = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this._petsBackend)
      .pipe(map(response => response.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      })));
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${this._petsBackend}/${name}`);
  }

  savePet(pet: Pet) {
    return this.http.post(this._petsBackend, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this._petsBackend}/${id}`, {responseType: 'text'});
  }

  sendText(name: string){

    return this.http.post(`${this._petsBackend}/sendText`, JSON.stringify(name));
  }

}
