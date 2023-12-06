import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private http: HttpClient) { }

  buscar(valorDigitado: string): Observable<LivrosResultado>{
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.API, { params })
  //  pipe(
    //tap(retornoAPI => console.log(retornoAPI)),
   // map(resultado =>resultado.items ?? []),
    //tap(resultado => console.log('Após o map', resultado))
    //)
  }
}


/*Pipe: agrupa diversos outros tipos de operadores.
  Tap: operador para debugar a aplicação. Ele não modifica os dados, serve apenas para visualizá-los
  Map: O map realiza uma mudança, os dados são recebidos e transformados*/
