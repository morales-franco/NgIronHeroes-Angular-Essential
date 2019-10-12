import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../models/heroe.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styles: []
})
export class HeroeListComponent implements OnInit {

  title : string = "Heroe List"; //show in view by Interpolation Binding
  imageWith: number = 100;
  imageMargin: number = 2;
  showImage: boolean = true;
  messageError: string = "";
  
  _filter: string = "";
  get filter(){
    return this._filter;
  }

  set filter(value: string){
    this._filter = value;
    this.heroesFilter = this._filter ? this.performFilter(this._filter) : this.heroes;

  }

 

   heroes: IHeroe[] = [];

  heroesFilter : IHeroe[] = [];

  constructor(private heroeService : HeroesService) { }

  ngOnInit() {
    this.heroeService.getHeroes()
    .subscribe(heroesDataSource => {
      this.heroes = heroesDataSource;
      this.heroesFilter = this.heroes;
    },
    (error) => this.handlerError(error))
  }

  handlerError(error: any){
    this.messageError = error;
  }

  performFilter(filterBy: string) : IHeroe[]{
    filterBy = filterBy.toLocaleLowerCase();

    return  this.heroes
    .filter(h => h.name.toLocaleLowerCase().indexOf(filterBy) >= 0 );
  }

  onNotify(message : string){
    console.log(message);
  }
}
