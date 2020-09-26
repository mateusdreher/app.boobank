import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  path: string;

  constructor() {
    this.path = location.pathname;
  }

  ngOnInit(): void {
    
  }

}
