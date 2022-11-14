import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImgvalidatorService {

  constructor(private http: HttpClient) { }
  validateImg(url: string){
    return this.http.get(url, {responseType: 'text'});
  }
}
