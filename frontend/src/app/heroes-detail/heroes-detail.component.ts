import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../types/Hero";

@Component({
    selector: 'app-heroes-detail',
    templateUrl: './heroes-detail.component.html',
    styleUrls:['./heroes-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

    //defines a property hero with an input decorator
    //The input decorator indicates that the property value passess in from the component's parent, HeroListComponent
    @Input() hero!: Hero;
    constructor() { }
    ngOnInit(){

    }
}