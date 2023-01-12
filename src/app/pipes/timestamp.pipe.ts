import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {
  time = new Date(Date.now());

  transform(handler: any): string {
    const splitTimeIntoArray = this.time.toLocaleTimeString('en-US').split(':');


    if(splitTimeIntoArray[2] === '00') {
      return `${splitTimeIntoArray[0]}h - ${splitTimeIntoArray[1]}m`;
    } else {
      return `${splitTimeIntoArray[1]}m`;
    }
  }
}
