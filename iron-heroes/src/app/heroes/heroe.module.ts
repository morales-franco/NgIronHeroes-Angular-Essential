import { NgModule } from '@angular/core';
import { HeroeListComponent } from './heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail.component';
import { SecretComponent } from './secret.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroeListComponent,
    HeroeDetailComponent,
    SecretComponent,
  ],
  imports: [
    HeroeRoutingModule,
    SharedModule
  ]
})
export class HeroeModule { }
