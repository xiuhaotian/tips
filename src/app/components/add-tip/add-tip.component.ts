import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tip } from '../../models/tip/tip';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css']
})
export class AddTipComponent implements OnInit {

  @Output() tipAdded = new EventEmitter<Tip>();

  text: string;

  constructor() { }

  ngOnInit() {
  }

  addTip() {
    if (this.text == "" || this.text == null) {
      alert("您还没有输入内容！")
    }
    else {
      this.tipAdded.emit({ time: new Date().toLocaleString(), text: this.text })
    }
  }
}
