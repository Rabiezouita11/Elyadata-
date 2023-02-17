import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { blogs} from '../models/blog';
import { BlogService } from '../services/blog-service.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: blogs[] = [];
  searchText: string = '';
  constructor(private blogService: BlogService) { }

  ngOnInit() {
  
    this.getBlogs();
  }
  getBlogs(): void {
    this.blogService.getBlogs().subscribe(
      (response: any) => {
        // Extract the list of blogs from the response object
        this.blogs = response.blogs;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  


  upvote(blog: blogs): void {
    blog.upvotes += 1;
    this.blogService.updateBlog(blog).subscribe(
      (response: any) => {
        console.log(response);
      }
    );

  }
  downvote(blog: blogs): void {
    blog.downvotes += 1;
    this.blogService.updateBlog(blog).subscribe(
      (response: any) => {
        console.log(response);
      }
    );

  }

  

}
