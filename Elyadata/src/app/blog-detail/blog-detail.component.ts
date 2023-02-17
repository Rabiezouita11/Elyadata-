import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogs } from '../models/blog';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog!: blogs;
  constructor(   private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe((blog) => {
        this.blog = blog;
      });
    }
  }
  upvote() {
    this.blog.upvotes++;
    this.blogService.updateBlog(this.blog).subscribe();
  }

  downvote() {
    this.blog.downvotes++;
    this.blogService.updateBlog(this.blog).subscribe();
  }
}
