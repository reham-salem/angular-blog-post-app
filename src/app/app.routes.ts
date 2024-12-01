import { Routes } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: ':id/details', component: PostDetailsComponent }
];
