import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { SecretInformationPipe } from '../pipes/secret-information.pipe';
import { RatingComponent } from './rating.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SecretInformationPipe,
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    SecretInformationPipe,
    RatingComponent,
    FormsModule,
    HttpClientModule,
   
  ]
})
export class SharedModule { }
