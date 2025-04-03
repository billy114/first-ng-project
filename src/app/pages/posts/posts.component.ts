import {Component, OnInit} from '@angular/core';
import {PostService} from '../../core/services/post.service';
import {Post} from '../../core/models/post';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [

  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  posts : Array<Post> = [];
  constructor(private postService : PostService, private http : HttpClient) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (posts : Array<Post>) => this.posts = posts
    );
  }

}
