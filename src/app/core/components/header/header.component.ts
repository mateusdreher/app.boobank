declare const M;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tooltip: HTMLElement;

  constructor() {
  }

  ngOnInit(): void {
    this.tooltip = document.getElementsByClassName("tooltipped")[0] as HTMLElement;
    M.Tooltip.init(this.tooltip, "");
  }

}
