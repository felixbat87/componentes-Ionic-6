import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Componente } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsuarios (){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getAlbums(){
  
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');

  }

  getHeroes(){
   
    return this.http.get<any>('/assets/data/superheroes.json').pipe(
      delay(3000)
    );

  }

 
}
