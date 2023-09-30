import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/models/blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url:string="http://localhost:3000/blogs";
  constructor(private http:HttpClient) { }

  addBlogs(blog:BlogPost):Observable<BlogPost>{
    return this.http.post<BlogPost>(this.url,blog);
  }
}
