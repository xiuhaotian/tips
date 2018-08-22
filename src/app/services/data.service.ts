import { Injectable } from '@angular/core';
import { Tip } from '../models/tip/tip';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tips: Tip[];

  constructor() { }

  getTips() {
    if (localStorage.getItem("tips") == null) {
      this.tips = [];
    }
    else {
      this.tips = JSON.parse(localStorage.getItem("tips"));
    }
    return this.tips;
  }

  addTip(tip: Tip) {
    this.tips.unshift(tip);

    let tips;

    if (localStorage.getItem("tips") == null) {
      tips = [];
      tips.unshift(tip);
      localStorage.setItem("tips", JSON.stringify(tips));
    }
    else {
      tips = JSON.parse(localStorage.getItem("tips"));
      tips.unshift(tip);

      //重新设置 LocalStorage
      localStorage.setItem("tips", JSON.stringify(tips));
    }
  }

  removeTip(tip: Tip) {
    for (let i = 0; i < this.tips.length; i++) {
      if (this.tips[i] == tip)
        this.tips.splice(i, 1);
      localStorage.setItem("tips", JSON.stringify(this.tips));
    }
  }
}
