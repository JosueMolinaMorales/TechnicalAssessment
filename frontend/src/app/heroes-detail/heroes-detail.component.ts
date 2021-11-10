import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../types/Hero";
import { HeroesListComponent } from "../heroes-list/heroes-list.component";
import { BackendService } from "../services/backend.service";

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls:['./heroes-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    
    @Input() hero:Hero = {name: "", level:0, class: "", id: ""}
    constructor(private backend: BackendService) { }
    
    
    async ngOnInit(): Promise<void>{
        //this.test = await this.backend.getAHero(this.heroes[0]);
        //this.hero = this.backend.getAhero(aHero)
    }
}