import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/types/Hero';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  newHero: Hero = {name:"", level:-1, class:"", id:""};
  heroCreated: boolean = false;
  constructor(private backend: BackendService, private router: Router) { }

  ngOnInit(): void {
  }
  
  isHeroReady(){
    if(this.newHero.name.length != 0 && this.newHero.level > -1 && this.newHero.class.length != 0){
      this.createHero();
    }
  } 

  addName(name:string): void{
    this.newHero.name = name;
    this.isHeroReady()
  }

  addClass(Hclass:string): void{
    this.newHero.class = Hclass;
    this.isHeroReady()
  }

  addLevel(HLevel: number): void{
    this.newHero.level = HLevel;
    this.isHeroReady()
  }

  async createHero(){
    this.heroCreated = true;
    await this.backend.createAHero(this.newHero); 
  }

  goBackToHomePage(){
    if(this.heroCreated)
      this.router.navigate(['/']);
    else
      window.alert("Please enter data into all fields");
  }
}
