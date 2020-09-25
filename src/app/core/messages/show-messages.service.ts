declare const M;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowMessagesService {

  constructor() { }

  successfull(msg: string): void{
    new M.Toast({
      html: `<b>${msg}</b>`,
      displayLength: 2000,
      inDuration: 400,
      outDuration: 400,
      classes: 'green'
    });
  }
  

  error(msg: string): void{
    new M.Toast({
      html: `<b>${msg}</b>`,
      displayLength: 2000,
      inDuration: 400,
      outDuration: 400,
      classes: 'red'
    });
  }
}
