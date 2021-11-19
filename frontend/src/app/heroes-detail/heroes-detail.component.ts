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
    confirmedDelete: boolean = false;
    constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }
    
    
    async ngOnInit(): Promise<void>{
        this.id = this.route.snapshot.paramMap.get("id");
        this.backend.doesHeroExist(String(this.id));
        this.hero = await this.backend.getAHero(this.id);
    }

    async deleteHero(){
        this.confirmedDelete = window.confirm("Are you sure you want to delete this hero?");
        if(this.confirmedDelete){
            await this.backend.deleteAhero(String(this.id));
            this.returnHome();
        }
    }

    returnHome(){
        this.router.navigate(['/']);
    }
}