import { Component, OnInit } from '@angular/core';
import { AuthService } from '@providers/auth/auth.service';
import { TransationsService } from '@providers/transations/transations.service';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss']
})
export class ComparativeComponent implements OnInit {

  balance: Object;
  loader: boolean

  constructor(private transationsService: TransationsService, private authService: AuthService) {
    this.loader = true;
  }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.transationsService.getBalance().subscribe(
      (result) => {
        this.balance = result['res'].data;
        this.loader = false;
      },
      (error) => {
        this.loader = false;
        if (error.error.res.statusCode == 7) {
          this.authService.setCurrentUserSessionValue(null, true);
        }
        console.error(error);
        
      }
    )
  }
}
