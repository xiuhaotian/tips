import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = "便签纸";

  greenAngular = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiA8Zz4NCiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPg0KICA8cGF0aCBmaWxsPSIjMDBmZjAwIiBkPSJtMTI0LDI2bC05My4xLDMzLjJsMTQuMiwxMjMuMWw3OC45LDQzLjdsNzguOSwtNDMuN2wxNC4yLC0xMjMuMWwtOTMuMSwtMzMuMnoiIGlkPSJzdmdfMSIvPg0KICA8cGF0aCBmaWxsPSIjMDBiZjAwIiBkPSJtMTIzLDI2bDAsMjIuMmwwLC0wLjFsMCwxNzcuOWw3OC45LC00My43bDE0LjIsLTEyMy4xbC05My4xLC0zMy4yeiIgaWQ9InN2Z18yIi8+DQogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Im0xMjMsNDkuMWwtNTguMiwxMzAuNWwyMS43LDBsMTEuNywtMjkuMmw0OS40LDBsMTEuNywyOS4ybDIxLjcsMGwtNTgsLTEzMC41em0xNyw4My4zbC0zNCwwbDE3LC00MC45bDE3LDQwLjl6IiBpZD0ic3ZnXzMiLz4NCiA8L2c+DQo8L3N2Zz4=";
  redAngular = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";

  angularLogo = this.redAngular;

  changeAngularColor() {
    if (this.angularLogo == this.redAngular) {
      this.angularLogo == this.greenAngular;
    }
    else {
      this.angularLogo = this.redAngular;
    }
  }

  constructor() {
  }

  ngOnInit() {

  }

}
