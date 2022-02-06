import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsModule } from './authors/authors.module';
import { ReviewersModule } from './reviewers/reviewers.module';
import { EditorsModule } from './editors/editors.module';
import { SpecialissueModule } from './specialissue/specialissue.module';
import { JournaloverviewModule } from './journaloverview/journaloverview.module';
import { QuicklinksModule } from './quicklinks/quicklinks.module';
//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ArchiveComponent } from './archive/archive.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitComponent } from './submit/submit.component';
import { QuicklinksmainComponent } from './quicklinksmain/quicklinksmain.component';
import { ArticlesinpressComponent } from './journaloverview/articlesinpress/articlesinpress.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComingsoonComponent,
    AboutusComponent,
    ContactComponent,
    ArchiveComponent,
    FooterComponent,
    SubmitComponent,
    QuicklinksmainComponent,
    ArticlesinpressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorsModule,
    ReviewersModule,
    EditorsModule,
    SpecialissueModule,
    BrowserAnimationsModule,
    JournaloverviewModule,
    HttpClientModule,
    QuicklinksModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
