declare const M;
import { Component, OnInit } from '@angular/core';

import { AccountInfosService } from '@providers/account-infos/account-infos.service';
import { AuthService } from '@providers/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tooltip: HTMLElement;
  account: any;

  constructor(private authService: AuthService, private accountInfosService: AccountInfosService) {
  }

  ngOnInit(): void {
    this.tooltip = document.getElementsByClassName("tooltipped")[0] as HTMLElement;
    M.Tooltip.init(this.tooltip, "");
    this.getAccountInfos();
  }

  getAccountInfos(): void {
    this.accountInfosService.get().subscribe(
      (result) => {
        this.account = result['res'].data;
        console.log(this.account);
      }, 
      (error) => {
        console.error(error);
      }
    )
  }
  logout() {
    this.authService.setCurrentUserSessionValue(null, false);
  }

}
