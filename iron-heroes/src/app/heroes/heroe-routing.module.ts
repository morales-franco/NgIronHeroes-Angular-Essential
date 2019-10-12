import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroeListComponent } from './heroe-list.component';
import { HeroeDetailComponent } from './heroe-detail.component';
import { SecretHeroeGuard } from '../guards/secret-heroe.guard';
import { SecretComponent } from './secret.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: "heroes", component: HeroeListComponent },
      { path: "heroes/:id", component: HeroeDetailComponent, canActivate: [ SecretHeroeGuard] },
      { path: "secret", component: SecretComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroeRoutingModule { }
