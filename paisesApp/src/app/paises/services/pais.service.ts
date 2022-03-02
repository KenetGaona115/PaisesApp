import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/restCountriesResponse';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl: string = 'https://restcountries.com/v2';

  buscarPais(nombre_Pais: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nombre_Pais}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(nombre_Capital: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${nombre_Capital}`
    return this.http.get<Country[]>(url);
  }

  buscarAlpha(aplha_pais: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${aplha_pais}`
    return this.http.get<Country>(url);
  }

}
