import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { HeaderComponent } from './layout/header.component';
import { HeroeListComponent } from './heroes/heroe-list.component';
import { HeroeDetailComponent } from './heroes/heroe-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { SecretInformationPipe } from './pipes/secret-information.pipe';
import { RatingComponent } from './shared/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    HeroeListComponent,
    HeroeDetailComponent,
    PageNotFoundComponent,
    SecretInformationPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "heroes", component: HeroeListComponent },
      { path: "heroes/:id", component: HeroeDetailComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
