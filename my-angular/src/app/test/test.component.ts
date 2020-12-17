import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() name: string;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {
    // THIS WILL NOT WORK; VALUE FROM @Input is NOT available yet, use ngOnInit()
    // console.log(`This ${this.name} is from the AppComponent.`);
  }

  ngOnInit(): void {
    console.log(`This ${this.name} is from the AppComponent.`);

    // emit some new value; for the parent component
    this.newItemEvent.emit(`Thursday Angular Training :: ${this.name}`);
  }

}
