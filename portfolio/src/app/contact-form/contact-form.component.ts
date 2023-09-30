import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/models/blogPost';
import { BlogService } from '../services/blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  constructor(private blogService:BlogService,private _snackBar:MatSnackBar) {  }

  ngOnInit(): void {
      
  }

  blog:BlogPost={};

  // Add blog method 
  onSubmit(blogForm:any){
   this.blogService.addBlogs(blogForm.value).subscribe({
    next:data=>{
      this.clearFormField();
      this._snackBar.open("Blog post successfully submitted","sucess",{
        duration:5000,
        panelClass:['mat-toolbar']
      })
    }
   })
  }

  // Clear Form field 
  clearFormField(){
    this.blog.fullName="";
    this.blog.email="";
    this.blog.title="";
    this.blog.subTitle="";
    this.blog.message="";
  }
}
