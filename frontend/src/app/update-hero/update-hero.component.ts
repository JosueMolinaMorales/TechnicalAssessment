import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {

  @Input() hero: Partial<Hero> = {};
  id: string | null = "";

  constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.backend.doesHeroExist(String(this.id));
  }

  updateName(hName: string){
    this.hero.name = hName;
  }
  updateClass(hClass: string){
    this.hero.class = hClass;
  }
  updateLevel(hLevel: number){
    this.hero.level = hLevel;
  }

  async updateHero(){
    //window.alert("ID: " + this.id + " New name is: " + this.hero.name);
    await this.backend.updateAHero(String(this.id),JSON.stringify(this.hero));
    this.goBackToHomePage();
  }

  goBackToHomePage(){
    this.router.navigate(['/']);
  }
}
