import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from '../authors/authors/authors.component';

const routes : Routes = [{
  path: "", component: AuthorsComponent
}]
@NgModule({
  declarations: [AuthorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthorsModule { }
