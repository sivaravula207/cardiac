import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Volume1issue1Component } from './volume1issue1/volume1issue1.component';
import { ArticlesarchivelandingComponent } from './articlesarchivelanding/articlesarchivelanding.component';
import { ArchivedashboardComponent } from './archivedashboard/archivedashboard.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesarchivelandingComponent,
    children: [
      {
        path: '',
        component: ArchivedashboardComponent
      },
      {
        path: 'volume-1-issue-1',
        component: Volume1issue1Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesarchiveRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/