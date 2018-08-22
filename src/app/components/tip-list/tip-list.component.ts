import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Tip } from '../../models/tip/tip'

@Component({
  selector: 'app-tip-list',
  templateUrl: './tip-list.component.html',
  styleUrls: ['./tip-list.component.css']
})
export class TipListComponent implements OnInit {

  tips: Tip[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.tips=this.dataService.getTips();
  }

  addTip(tip:Tip){
    this.dataService.addTip(tip);
  }

}
