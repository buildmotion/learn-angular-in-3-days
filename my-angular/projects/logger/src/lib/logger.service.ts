import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  // tslint:disable-next-line:typedef
  public log(message: string) {
    console.log(message);
  }
}
