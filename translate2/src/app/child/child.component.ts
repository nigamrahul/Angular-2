import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() value1;
  @Output() out:EventEmitter <any> = new EventEmitter();
  childData:string = 'Hi'
  constructor() { 

  }

  ngOnInit() {
    this.out.emit(this.childData);

  }

}
