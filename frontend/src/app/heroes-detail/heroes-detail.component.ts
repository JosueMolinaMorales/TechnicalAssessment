import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../types/Hero";
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../services/backend.service";

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls:['./heroes-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    
    @Input() hero: Hero = {name: "", id: "123", level: 0, class: ""};
    id: string | null = "";
    constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }
    
    
    async ngOnInit(): Promise<void>{
        //this.test = await this.backend.getAHero(this.heroes[0]);
        this.id = this.route.snapshot.paramMap.get("id");
        
        if(this.id){
            this.hero = await this.backend.getAHero(this.id);
        }
    }
}