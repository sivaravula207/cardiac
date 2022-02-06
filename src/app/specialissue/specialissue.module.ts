import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialissueComponent } from './specialissue/specialissue.component';
import { Routes, RouterModule } from '@angular/router'

const routes : Routes = [{
  path: "", component: SpecialissueComponent
}]

@NgModule({
  declarations: [SpecialissueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class SpecialissueModule { }
