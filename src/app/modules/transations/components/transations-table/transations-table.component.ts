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
    this.getTransations();
  }

  getTransations(): void {
    this.transationsService.getTransations().subscribe(
      (result) => {
        this.saveTransationstoVariable(result['res'].data);
      }
    );
  }

  saveTransationstoVariable(result): void {
    Object.keys(result).forEach((index) => {
      this.transations.push(result[index]);
    });
    
    console.log(this.transations);
  }

}
