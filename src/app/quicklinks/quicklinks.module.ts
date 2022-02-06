import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';

@NgModule({
  declarations: [QuicklinksComponent],
  imports: [
    CommonModule
  ],
  exports: [QuicklinksComponent]
})
export class QuicklinksModule { }
