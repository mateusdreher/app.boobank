import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ITransation } from '@interfaces/ITransation';
import { TransationsService } from '@providers/transations/transations.service';
import { AuthService } from '@providers/auth/auth.service';


@Component({
  selector: 'app-transations-table',
  templateUrl: './transations-table.component.html',
  styleUrls: ['./transations-table.component.scss']
})
export class TransationsTableComponent implements OnInit {

  transations: Array<ITransation> = [];
  no_transations: boolean;
  
  constructor(private transationsService: TransationsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTransations();
  }

  getTransations(): void {
    this.transationsService.getTransations().subscribe(
      (result) => {
        this.saveTransationstoVariable(result['res'].data);
      },
      (error) => {
        if (error.error.res.statusCode == 7) {
          this.authService.setCurrentUserSessionValue(null, true);
        }
        console.error(error);
      }
    );
  }

  saveTransationstoVariable(result): void {
    Object.keys(result).forEach((index) => {
      this.transations.push(result[index]);
    });
    
    if (Object.keys(result).length == 0) {
      this.no_transations = true;
    }
    else {
      this.no_transations = false;
    }
  }

}
