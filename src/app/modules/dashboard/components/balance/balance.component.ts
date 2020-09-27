import { AuthService } from '@providers/auth/auth.service';
import { TransationsService } from '@providers/transations/transations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balance: number;
  loader: boolean;

  constructor(private transationsService: TransationsService, private authService: AuthService) { 
    this.loader = true;
  }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(): void {
    this.transationsService.getBalance().subscribe(
      (result) => {
        this.balance = result['res'].data.balance;
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
