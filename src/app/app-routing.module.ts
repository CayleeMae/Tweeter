import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MoreComponent } from './components/more/more.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'explore',
        component: ExploreComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'more',
        component: MoreComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/feed',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home/feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
