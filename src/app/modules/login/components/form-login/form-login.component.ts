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

  constructor(private authService: AuthService, private msg: ShowMessagesService) {
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
    if (this.formIsValid()) {
      this.authService.auth(this.login.username, this.login.password).subscribe(
        (result) => {
          this.authService.setCurrentUserSessionValue(result['res'].data.token);
        }
      )
    }

    else {
      this.msg.error("Verifique os campos");
    }
  }

}
