import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { blogs } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  [x: string]: any;

  public url= 'api'; // replace with your API endpoint

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<blogs[]> {
    return this.http.get<blogs[]>(this.url+"/blogs");
  }

  getBlogById(id: number): Observable<blogs> {
    return this.http.get<blogs>(this.url + '/blogs/' + id);
  }

  addBlog(blog: blogs): Observable<blogs> {
    return this.http.post<blogs>(this.url + '/blogs', blog);
  }
  updateBlog (blog: blogs): Observable<blogs> {
    return this.http.put<blogs>(this.url + '/blogs/' + blog._id, blog);
  }
  
}
