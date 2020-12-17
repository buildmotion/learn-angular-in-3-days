import { Component, OnInit } from '@angular/core';

import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [LoggerService] // scoped to the component
})
export class AppComponent implements OnInit {
  title = 'my-angular';

  // example of dependency injection --> providers: [LoggerService]
  // scope is from the root-injector (application-level); Singleton (only one instance)
  constructor(
    // private loggerService: LoggerService
  ) {
    // this.loggerService.log('Hello from Matt2');
  }

  ngOnInit(): void {
    // this.title = `Thursday AppComponent from Angular`;
  }

  processNewName(value: string) {
    console.log(`Value form child component: ${value}.`);
  }
}
