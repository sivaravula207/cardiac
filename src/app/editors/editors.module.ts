import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors/editors.component';
import { Routes, RouterModule } from '@angular/router'

const routes : Routes = [{
  path: "", component: EditorsComponent
}]


@NgModule({
  declarations: [EditorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EditorsModule { }
