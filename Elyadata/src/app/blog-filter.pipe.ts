import { Pipe, PipeTransform } from '@angular/core';
import { blogs } from './models/blog';


@Pipe({
  name: 'blogFilter'
})
export class BlogFilterPipe implements PipeTransform {
  transform(blogs: blogs[], searchText: string): blogs[] {
    if (!blogs) return [];
    if (!searchText) return blogs;

    searchText = searchText.toLowerCase();

    return blogs.filter(blog => {
      return blog.title.toLowerCase().includes(searchText)
        || blog.content.toLowerCase().includes(searchText)
        || blog.author.toLowerCase().includes(searchText);
    });
  }
}
