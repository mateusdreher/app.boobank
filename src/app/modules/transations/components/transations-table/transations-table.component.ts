import { Component, OnInit } from '@angular/core';
import { ITransation } from '@interfaces/ITransation';
import { TransationsService } from '@providers/transations/transations.service';


@Component({
  selector: 'app-transations-table',
  templateUrl: './transations-table.component.html',
  styleUrls: ['./transations-table.component.scss']
})
export class TransationsTableComponent implements OnInit {

  transations: Array<ITransation> = [];
  
  constructor(private transationsService: TransationsService) { }

  ngOnInit(): void {
  }

  getTransations(): void {
    this.transationsService.getTransations().subscribe(
      (result) => {
        this.saveTransationstoVariable(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveTransationstoVariable(result): void {
    Object.keys(result).forEach((index) => {
      this.transations.push(result[index]);
    });
  }

}
