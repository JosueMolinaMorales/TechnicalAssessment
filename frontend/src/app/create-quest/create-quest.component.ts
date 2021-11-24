import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Quest } from '../types/Quest';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.css']
})
export class CreateQuestComponent implements OnInit {

  newQuest: Quest = {name:"", description:""};
  questAdded: boolean = false;
  heroId: string | null = "";

  constructor(private backend: BackendService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.heroId = this.route.snapshot.paramMap.get("id");
    this.backend.doesHeroExist(String(this.heroId));
  }

  addName(qName: string){
    this.newQuest.name = qName;
    this.isQuestReady();
  }

  addDescription(qDes: string){
    this.newQuest.description = qDes;
    this.isQuestReady();
  }

  isQuestReady(){
    
  }



}
