import { Component } from '@angular/core';
import { TweeterService } from 'src/app/services/tweeter.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {

  public bookmarks: any[] = [];
  public favorited = false;

  constructor(private tweeterService: TweeterService) {}

  ngOnInit(): void {

    this.tweeterService.getBookmarksData().subscribe((data: any) => {
      this.bookmarks = data;
      this.tweeterService.$tweeterData.next({
        bookmarks: data,
        favorited: false,
      });
    });
  }
}
