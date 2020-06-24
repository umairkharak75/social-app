import { Component, OnInit } from '@angular/core';
import { PostService } from './../post.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  post
  
  postForm = new FormGroup({
   
    post: new FormControl(''),
   
  });

  constructor(public postService:PostService) { 
    this.post=[]
    this.postService.getAddedPost().subscribe(data=>{console.log(data)
      data.forEach(element => {
        this.post.push(element.name)
      });
      
      
   // this.post.push(data.name)
    console.log(this.post)
    
    })
  }

  ngOnInit(): void {
  }

  addPost(){
    const data={name:this.postForm.get('post').value}
   this.postService.addPost(data)

  }
  getPosts(){
    this.postService.getPost.subscribe(data=>{
      console.log(data)
    })
  }
}
