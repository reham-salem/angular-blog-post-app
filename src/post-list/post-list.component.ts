import { Component } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { PaginationControlsComponent } from '../pagination-controls/pagination-controls.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [HttpClientModule,RouterModule,CommonModule,ErrorMessageComponent,LoadingIndicatorComponent,PaginationControlsComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  loading=false;
  perPage=9;
  page=1;
  postList:any[]=[];
  allPostList:any[]=[];
  totalPosts!: number;
  totalPages!: number;
  errormessage:any;
  hasError=false;

  constructor(private blogPostService:BlogPostService){}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts():void{
    this.loading=true;
    this.blogPostService.getBlogPosts().subscribe(res=>{
      this.allPostList=res;
      this.loading=false;
      this.hasError=false;
      this.totalPosts=res.length;
      this.totalPages=Math.ceil(res.length/this.perPage);
      this.setPostList()
    },(err:HttpErrorResponse)=>{
      this.loading=false;
      this.hasError=true;
      this.errormessage=err.message;
    })
  }

  onPageChange(page:any) {
    this.page = page;
    this.setPostList();
  }

  setPostList():void{
    const startIndex = (this.page - 1) * this.perPage;
    this.postList = this.allPostList.slice(startIndex, startIndex + this.perPage);
  }
}
