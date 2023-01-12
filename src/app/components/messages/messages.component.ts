import { Component } from '@angular/core';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  public messages: any[] = [];
  public userProfileImg = '';
  public userProfileName = '';
  public userProfileHandler = '';
  public unRead = false;

  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {

    this.tweeterService.getMessagesData().subscribe((data: any) => {
      this.messages = data;
      this.unRead = true;
      this.userProfileName = data[0].name;
      this.userProfileImg = data[0].profileImg;
      this.userProfileHandler = data[0].handler;
      this.tweeterService.$tweeterData.next({
        userProfileImg: data[0].profileImg,
        userProfileName: data[0].userProfileName,
        userProfileHandler: data[0].userProfileHandler,
        messages: data,
        unread: true,
      });
    });
  }
}
