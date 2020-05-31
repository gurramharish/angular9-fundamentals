import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  declarations: [
    PostsComponent
  ],
  providers: [
  ]
})
export class PostsModule { }
