import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { AddHeaderInterceptor } from '../shared/services/add-header.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsComponent
  ],
  providers: []
})
export class PostsModule { }
