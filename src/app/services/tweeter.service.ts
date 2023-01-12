import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweeterService {
 public $tweeterData: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private httpClient: HttpClient) { }

  getTweeterData(): Observable<any>{
    return this.httpClient.get(
      '/api/feeds');
  }

  getMessagesData() {
    return this.httpClient.get('/api/messages');
  }
  
  getBookmarksData() {
    return this.httpClient.get('/api/bookmarks');
  }
  
  getExploreData() {
    return this.httpClient.get('/api/explore');
  }

  getMoreData() {
    return this.httpClient.get('/api/more');
  }

  getNotificationsData() {
    return this.httpClient.get('/api/notifications');
  }

  getProfileData() {
    return this.httpClient.get('/api/profile');
  }

  sendTweeterData(tweetMessage: any) {
    return this.httpClient.post('/api/feed', {
      tweetMessage,
    });
  }

  updateTweeterData(id: number, tweetMessage: any) {
    return this.httpClient.put(`/api/feeds/${id}`, {
      tweetMessage,
    });
  }

  deleteTweeterData(id: number) {
    return this.httpClient.delete(`/api/feeds/${id}`);
  }
}
