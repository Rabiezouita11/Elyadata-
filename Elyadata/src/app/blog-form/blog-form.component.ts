import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { blogs } from '../models/blog';
import { BlogService } from '../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router) { 
    this.blogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // Create a new blog object from the form values
    const newBlog: blogs = {
      title: this.blogForm.get('title')!.value,
      content: this.blogForm.get('content')!.value,
      author: this.blogForm.get('author')!.value,
      upvotes: 0,
      downvotes: 0,
  
    };
    // Add the new blog to the database via the blog service
    this.blogService.addBlog(newBlog).subscribe(() => {
      // Redirect to the main blogs list page after successfully adding the new blog
      this.router.navigate(['/']);
    });
  }

}
