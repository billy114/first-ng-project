import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http : HttpClient) { }

  getPosts() : Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.apiUrl+'posts');
  }


}
