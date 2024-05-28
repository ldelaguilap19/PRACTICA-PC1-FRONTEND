import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http:HttpClient) { }

  public listaPais(): Observable<Pais[]>{
      return this.http.get<Pais[]>("http://localhost:8090/url/util/listaPais");
  }

}