import { AuthService } from '@providers/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  showHeaderAndFooter: boolean;

  constructor(private authService: AuthService) {
    if (authService.currentUserSessionValue) {
      this.showHeaderAndFooter = true;
    }
    else {
      this.showHeaderAndFooter = false;
    }
  }

  ngOnInit(): void {
    this.authService.currentUserSessionSubject.subscribe(
      (event) => {
        if (event != null) {
          this.showHeaderAndFooter = true;
        }
        else{
          this.showHeaderAndFooter = false;
        }
      }
    )
  }

}
