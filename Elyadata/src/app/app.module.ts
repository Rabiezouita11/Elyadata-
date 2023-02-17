import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogFilterPipe } from './blog-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogFormComponent,
    BlogFilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
