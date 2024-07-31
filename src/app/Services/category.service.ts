import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Common/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategoryByCatId(categoryId:number): Observable<Category>{
    var url = "http://localhost:8080/api/fare-category?categoryId=" + categoryId;
    return this.httpClient.get<Category>(url).pipe(
      map(response => response)
    );
  }
}
