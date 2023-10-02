import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Volume1issue1Component } from './volume1issue1/volume1issue1.component';
import { ArticlesarchivelandingComponent } from './articlesarchivelanding/articlesarchivelanding.component';
import { ArticlesarchiveRoutingModule } from './articlesarchive-routing.module';
import { ArchivedashboardComponent } from './archivedashboard/archivedashboard.component';

@NgModule({
  declarations: [Volume1issue1Component, ArticlesarchivelandingComponent, ArchivedashboardComponent],
  imports: [
    CommonModule,
    ArticlesarchiveRoutingModule
  ]
})
export class ArticlesarchiveModule { }
