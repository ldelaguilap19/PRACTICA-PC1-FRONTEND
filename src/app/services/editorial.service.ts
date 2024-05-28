import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(private http:HttpClient) { }

  public registraEditorial(editorial:Editorial) :Observable<any>{
      return this.http.post("http://localhost:8090/url/editorial",editorial);
  }


}
