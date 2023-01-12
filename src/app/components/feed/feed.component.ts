import { Component, OnInit } from '@angular/core';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  public feeds: any[] = [];
  public showFeed = false;
  public userProfileImg = '';
  public tweetMessage = '';
  
  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {
    this.tweeterService.$tweeterData.subscribe((data: any) => {
      this.feeds = data.feeds;
      this.userProfileImg = data.userProfileImg;
      this.showFeed = data.showFeed;
    })
  }

  createTweet() {
    this.tweeterService.sendTweeterData(this.tweetMessage);
  }
}
