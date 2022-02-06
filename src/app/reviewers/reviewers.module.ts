import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path:"", component: ReviewersComponent}
]


@NgModule({
  declarations: [ReviewersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReviewersModule { }
