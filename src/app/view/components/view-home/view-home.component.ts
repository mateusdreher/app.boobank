declare const M;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  tabs: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.tabs = document.getElementsByClassName("tabs")[0] as HTMLElement;

    M.Tabs.init(this.tabs, "");
  }

}
