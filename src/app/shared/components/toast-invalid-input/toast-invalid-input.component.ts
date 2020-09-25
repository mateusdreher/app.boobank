import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast-invalid-input',
  templateUrl: './toast-invalid-input.component.html',
  styleUrls: ['./toast-invalid-input.component.scss']
})
export class ToastInvalidInputComponent implements OnInit {

  @Input() mensagem: string;

  constructor() { }

  ngOnInit(): void {
  }

}
