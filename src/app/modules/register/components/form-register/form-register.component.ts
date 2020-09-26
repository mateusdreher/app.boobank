import { Component, OnInit } from '@angular/core';

import { IUser } from '@interfaces/IUser';

import { RegisterService } from '@providers/register/register.service';
import { ShowMessagesService } from '@core/messages/show-messages.service';
import { exit } from 'process';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  user: IUser;
  toasts: object;

  constructor(private msg: ShowMessagesService, private registerService: RegisterService) {
    this.user = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      cpf: "",
      rg: ""
    }

    this.toasts = {
      email: false,
      password: false,
      username: false
    }
  }

  ngOnInit(): void {
  }


  validateInput(event: object, input: string): void {
    let value = event['target'].value;

    if (input != "username") {
      this.toasts[input] = value != this.user[input];
    }
    else {
      this.registerService.verifyUsername(value).subscribe(
        (result) => {
          this.toasts['username'] = false;
        }, 
        (error) => {
          this.toasts['username'] = true;
        }
      )
    }
  }

  formIsvalid(): boolean {
    let valid = false;

    Object.keys(this.user).forEach((index) => {
      if(this.user[index] == "") {
        valid = false;
        return;
      }
      else{
        valid = true;
      }
    });

    return valid;
  }

  toastsValids(): boolean {

    if (this.toasts['email'] || this.toasts['password'] || this.toasts['username']) {
      return false;
    }

    return true;
  }

  submit(): void {
    console.log("VALID : " + this.toastsValids());
    if(this.toastsValids() && this.formIsvalid()) {
      this.registerService.createUser(this.user).subscribe(
        (result) => {
          console.log(result);
          this.msg.successfull("COnta criada com sucesso. Você já pode efetuar o login");
        },
        (error) => {
          console.error(error);
        }
      )
    }
    else {
      this.msg.error("Por favor, preencha todo os campos para continuar.");
    } 
  }

}
