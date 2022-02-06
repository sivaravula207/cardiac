import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApcComponent } from './apc/apc.component';
import { EthicsComponent } from './ethics/ethics.component';
import { EditorialboardComponent } from './editorialboard/editorialboard.component';
import { AuthorsdatabaseComponent } from './authorsdatabase/authorsdatabase.component';
import { AimscopeComponent } from './aimscope/aimscope.component';
import { IndexingComponent } from './indexing/indexing.component';
import { OpenaccesspolicyComponent } from './openaccesspolicy/openaccesspolicy.component';
import { PeerreviewpolicyComponent } from './peerreviewpolicy/peerreviewpolicy.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
const routes : Routes = [
{path: "apc", component: ApcComponent}]

@NgModule({
  declarations: [ 
    ApcComponent, EthicsComponent, EditorialboardComponent,
     AuthorsdatabaseComponent, AimscopeComponent, IndexingComponent,
      OpenaccesspolicyComponent, PeerreviewpolicyComponent,
       QuicklinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JournaloverviewModule { }
