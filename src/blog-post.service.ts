import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private url='https://dev.to/api/articles'
  constructor(private http:HttpClient) { }

  getBlogPosts(): Observable<any> {
    return this.http.get(`${this.url}`)
  }

  findPost(id:number): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }
}
