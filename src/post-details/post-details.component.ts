import { Component } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post:any;

  constructor(private blogPostService:BlogPostService,private router: ActivatedRoute){}

  ngOnInit(): void {
    const id =Number(this.router.snapshot.paramMap.get('id'));
    this.getPost(id);
  }

  getPost(id:number):void{
    this.blogPostService.findPost(id).subscribe(res=>{
      this.post=res;
    })
  }

}
