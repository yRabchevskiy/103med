import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableRoutingModule } from './data-table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableRoutingModule
  ]
})
export class DataTableModule { }
