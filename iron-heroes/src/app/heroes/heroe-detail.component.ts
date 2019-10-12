import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../models/heroe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styles: []
})
export class HeroeDetailComponent implements OnInit {

  heroeId : number = 0;
  heroe: IHeroe;
  errorMessage: string;

  constructor(private router : Router,
    private route : ActivatedRoute,
    private heroeService: HeroesService) { 
      this.heroeId = +this.route.snapshot.paramMap.get('id'); 
    }

  ngOnInit() {
    this.heroeService.getHeroe(this.heroeId)
    .subscribe(h => this.heroe = h,
    error => this.handlerError);
  }

  handlerError(error: any){
    this.errorMessage = error;
  }

  onBack(){
    this.router.navigate(["/heroes"]);
  }

}
