import { Router } from '@angular/router';
import { ShowMessagesService } from '@core/messages/show-messages.service';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '@providers/auth/auth.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  login: any;
  toasts: object;
  loader: boolean;

  constructor(private authService: AuthService, private msg: ShowMessagesService, private router : Router) {
    this.login = {
      username: "",
      password: ""
    }
    this.toasts = {
      username: false,
      password: false
    }
  }

  ngOnInit(): void {
  }

  validateInput(event: object, input:string) {
    if (this.login[input] == ""){
      this.toasts[input] = true;
    }
    else {
      this.toasts[input] = false;
    }
  }

  formIsValid(): boolean {
    if (this.login.username == "" || this.login.password == "") {
      return false;
    }

    return true;
  }

  submit(): void {
    this.loader = true;
    if (this.formIsValid()) {
      this.authService.auth(this.login.username, this.login.password).subscribe(
        (result) => {
          sessionStorage.setItem("cod_usu", result['res'].data.cod_usu);
          this.loader = false;
          this.authService.setCurrentUserSessionValue(result['res'].data.token, false);
          this.router.navigate(['']);
        },
        (error) => {
          this.loader = false;
          if (error.error.res && error.error.res.statusCode == 3 ) {
            this.msg.error("Usuário incorreto");
          }
          if (error.error.res && error.error.res.statusCode == 4 ) {
            this.msg.error("Senha incorreta");
          }
          console.error(error);
        }
      )
    }

    else {
      this.loader = false;
      this.msg.error("Verifique os campos");
    }
  }

}
