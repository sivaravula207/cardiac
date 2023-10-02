import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EditorsModule } from './editors/editors.module';
import { ArchiveComponent } from './archive/archive.component';
import { SpecialissueModule } from './specialissue/specialissue.module'
import { SubmitComponent } from './submit/submit.component';
import { JournaloverviewModule } from './journaloverview/journaloverview.module';
import { ApcComponent } from './journaloverview/apc/apc.component';
import { EthicsComponent } from './journaloverview/ethics/ethics.component';
import { ReviewersComponent } from './reviewers/reviewers/reviewers.component';
import { EditorsComponent } from './editors/editors/editors.component';
import { SpecialissueComponent } from './specialissue/specialissue/specialissue.component';
import { EditorialboardComponent } from './journaloverview/editorialboard/editorialboard.component';
import { AuthorsdatabaseComponent } from './journaloverview/authorsdatabase/authorsdatabase.component';
import { AuthorsComponent } from './authors/authors/authors.component';
import { AimscopeComponent } from './journaloverview/aimscope/aimscope.component';
import { IndexingComponent } from './journaloverview/indexing/indexing.component';
import { OpenaccesspolicyComponent } from './journaloverview/openaccesspolicy/openaccesspolicy.component';
import { PeerreviewpolicyComponent } from './journaloverview/peerreviewpolicy/peerreviewpolicy.component';
import { ArticlesinpressComponent } from './journaloverview/articlesinpress/articlesinpress.component';
const routes: Routes = [
  {path: "", component: AboutusComponent},
  {path: "home", component: AboutusComponent},
  // {path:"archive", component: ArchiveComponent},
  {path: "submit", component: SubmitComponent},
  {path:"authors", component: AuthorsComponent},
  {path: "reviewers", component: ReviewersComponent},
  {path: "editors", component: EditorsComponent},
  {path: "specialissue", component: SpecialissueComponent},
  {path: "editorialboard", component: EditorialboardComponent},
  {path:"apc", component: ApcComponent},
  {path: "authors-index", component: AuthorsdatabaseComponent},
  {path: "publication-ethics", component: EthicsComponent},
  {path: "aimandscope", component: AimscopeComponent},
  {path: "indexing", component: IndexingComponent},
  {path: "openaccesspolicy", component: OpenaccesspolicyComponent},
  {path: "peerreviewpolicy", component: PeerreviewpolicyComponent},
  {path: "articlesinpress", component: ArticlesinpressComponent},
  {path: "articlesinpress", component: ArticlesinpressComponent},
  {
    path: 'archive',
    loadChildren: () => import('./articlesarchive/articlesarchive.module').then(m => m.ArticlesarchiveModule)
  },
  {path: "**", component: AboutusComponent},
  {path: "404", component: AboutusComponent}


]
;

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
