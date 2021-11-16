import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hero } from '../types/Hero';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Gets a list of heroes from the backend API
   * 
   * @returns An array of heroes
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get<Hero[]>(`${environment.api}/heroes`).toPromise();
  }

  /**
   * Gets a details of a hero
   * @param heroId a string that contains the id of the hero that you are trying to find
   * @returns a Hero
   */
  getAHero(heroId: string | null): Promise<Hero>{
    return this.http.get<Hero>(`${environment.api}/heroes/${heroId}`).toPromise().catch<Hero>(err => {
      window.alert("ERROR, No hero found with ID: " + heroId);
      this.router.navigate(['/']);
      return {name: "", id: "", level: 0, class:""};
    });
  }

  /**
   * Create a hero
   * @param hero the hero to add to the database
   */
  createAHero(hero: Hero): Promise<Hero>{
    return this.http.post<Hero>(`${environment.api}/heroes`, hero).toPromise();
  }
}
