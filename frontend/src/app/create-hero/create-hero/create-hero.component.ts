import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  async createHero(heroname:string, heroclass:string, herolevel:number){
    await this.backend.createAHero({name:heroname, level:herolevel, class:heroclass, id:""}); 
  }
}
