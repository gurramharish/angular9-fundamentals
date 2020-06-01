import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PostsResolverService } from './posts/posts-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
    resolve: { resolvedPosts: PostsResolverService }
  },
  { path: 'courses', canActivate: [AuthGuard], loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
