import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { TopicSidebarComponent } from './topic-sidebar/topic-sidebar.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent, TopicSidebarComponent, PostListComponent]
})
export class HomepageModule { }
