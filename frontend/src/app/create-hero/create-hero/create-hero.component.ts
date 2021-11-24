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
  
  /**
   * Checks to see if a hero is read to be created
   */
  isHeroReady(){
    if(this.newHero.name.length != 0 && this.newHero.level > -1 && this.newHero.class.length != 0){
      this.createHero();
    }
  } 

  /**
   * Adds a name to a hero
   * @param name Name of the hero
   */
  addName(name:string): void{
    this.newHero.name = name;
    this.isHeroReady()
  }

  /**
   * Adds a class to the hero
   * @param Hclass Class of the hero
   */
  addClass(Hclass:string): void{
    this.newHero.class = Hclass;
    this.isHeroReady()
  }

  /**
   * Adds the level to the hero
   * @param HLevel Level of the hero
   */
  addLevel(HLevel: number): void{
    this.newHero.level = HLevel;
    this.isHeroReady()
  }

  /**
   * Creates the hero.
   */
  async createHero(){
    this.heroCreated = true;
    await this.backend.createAHero(this.newHero); 
  }

  /**
   * Goes to home page after the hero has been created. 
   * Ensures that the user has entered all the data to create the hero.
   */
  goBackToHomePage(){
    if(this.heroCreated)
      this.router.navigate(['/']);
    else
      window.alert("Please enter data into all fields");
  }
}
