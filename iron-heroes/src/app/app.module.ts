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
import { SecretHeroeGuard } from './guards/secret-heroe.guard';
import { SecretComponent } from './heroes/secret.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroeRoutingModule } from './heroes/heroe-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    HeroeListComponent,
    HeroeDetailComponent,
    PageNotFoundComponent,
    SecretInformationPipe,
    RatingComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeroeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
