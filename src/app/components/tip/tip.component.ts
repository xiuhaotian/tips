import { Component, OnInit, Input } from '@angular/core';
import { Tip } from '../../models/tip/tip';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  @Input("tip") tip: Tip;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeTip(tip) {
    var r = confirm("确定吗老铁?")
    if (r == true) {
      this.dataService.removeTip(tip);
      alert("您已成功毁尸灭迹！");
    }
    else {
      alert("销毁已取消!")
    }
  }

}
