import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from 'src/app/service/api.service';
import { GET_DRUGS } from 'src/app/service/user.queris';
import { IDrug } from './../../models/drug.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  drugs: IDrug[] = [];
  constructor(private api: ApiHttpService) { }

  ngOnInit(): void {
    this.api.getDrugs({ query: GET_DRUGS}).subscribe(res => {
      debugger
      this.drugs = res;
    });
  }

}
