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
    this.dataService.removeTip(tip);
    swal("该便签纸成功被销毁！");
  }

}
