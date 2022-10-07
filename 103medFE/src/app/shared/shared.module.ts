
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    TableModule,
  ],
  exports: [CardModule, ButtonModule, SidebarModule, TableModule]
})
export class SharedModule { }
