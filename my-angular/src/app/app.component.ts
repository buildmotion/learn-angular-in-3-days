import { Component } from '@angular/core';
import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';

  constructor(
    private loggerService: LoggerService
  ) {
    this.loggerService.log('Hello from Matt2');
  }
}
