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

  sendTweeterData(tweetMessage: any) {
    return this.httpClient.post('/api/feed', {
      tweetMessage,
    });
  }
}
