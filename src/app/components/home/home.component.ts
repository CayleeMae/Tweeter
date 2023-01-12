import { Component, OnInit } from '@angular/core';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sideNavLinks = [
    {
      name: 'Home',
      route: '/home/feed',
      icon: 'fas fa-home'
    },
    {
      name: 'Explore',
      route: '/home/explore',
      icon: 'fab fa-slack-hash'
    },
    {
      name: 'Notifications',
      route: '/home/notifications',
      icon: 'fas fa-bell'
    },
    {
      name: 'Messages',
      route: '/home/messages',
      icon: 'fas fa-envelope'
    },
    {
      name: 'Bookmarks',
      route: '/home/bookmarks',
      icon: 'fas fa-bookmark'
    },
    {
      name: 'Profile',
      route: '/home/profile',
      icon: 'fas fa-user'
    },
    {
      name: 'More',
      route: '/home/more',
      icon: 'fas fa-comment-dots'
    },
  ]
  public feeds: any[] = [];
  public userProfileImg = '';
  public userProfileName = '';
  public userProfileHandler = '';
  public showFeed = false;
  public tweetMessage = '';

  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {

    this.tweeterService.getTweeterData().subscribe((data: any) => {
      this.feeds = data;
      this.showFeed = true;
      this.userProfileName = data[0].name;
      this.userProfileImg = data[0].profileImg;
      this.userProfileHandler = data[0].handler;
      this.tweeterService.$tweeterData.next({
        feeds: data,
        userProfileImg: data[0].profileImg,
        showFeed: true,
      });
    });
  }

  createTweet() {
    this.tweeterService.sendTweeterData(this.tweetMessage);
  }
}


