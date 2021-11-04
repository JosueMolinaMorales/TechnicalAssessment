import express from 'express';
import { HeroesDB } from '../../database/HeroesDB.js';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quest.js';

export function questsRouter() {
    const router = express.Router();

    // TODO: Task 1
    /**
     * Get Quests for a hero
     */
    router.get('/heroes/:id/quests', (req, res) => {
        const heroId = req.params.id;
        const quests = QuestsDB.getInstance().getHeroQuests(heroId);

        if(!HeroesDB.getInstance().getHero(heroId)){ 
            res.sendStatus(404);//send 404 if hero was not found with given id
        }else{
            res.send(quests);
        }
    });

    // TODO: Task 2
    /**
     * Creating a quest for a hero
     */
    router.post('/heroes/:id/quests', (req, res) => {
        const body = req.body; //get info for quest (name, des)
        const heroId = req.params.id; //get heroId from :id

        if(!HeroesDB.getInstance().getHero(heroId)){ //if hero does not exist
            res.sendStatus(404);
        }else{ //hero exists
            const quest = new Quest(body, heroId); //create quest
            QuestsDB.getInstance().addQuest(quest);
            res.sendStatus(201);
        }
    })

    // TODO: Task 3
    /**
     * Updating a quest for a hero
     */
    router.patch('/heroes/:heroid/quests/:questid', (req, res) => {
        //get both ids
        const heroId = req.params.heroid;
        const questId = req.params.questid;
        const hero = HeroesDB.getInstance().getHero(heroId)
        const quest = QuestsDB.getInstance().getQuest(questId)

        //check to see if both ids are valid
        if(!hero || !quest){
            //either heroId or questId is invalid
            res.sendStatus(404);
        }else if(quest.heroId != heroId){
            //This checks to see if the given heroId does not match the quests' hero id
            res.sendStatus(400);
        }else{//both ids are valid and ids match 
            const body = req.body; //get infor for new quest
            QuestsDB.getInstance().updateQuest(questId,body);
            res.sendStatus(204)
        }
        
    });

    // TODO: Task 4
    /**
     * Delete a quest
     */
    router.delete('/heroes/:heroid/quests/:questid', (req, res) =>{
        const heroId = req.params.heroid;
        const questId = req.params.questid;
        const hero = HeroesDB.getInstance().getHero(heroId)
        const quest = QuestsDB.getInstance().getQuest(questId)

        //check to see if both ids are valid
        if(!hero || !quest){
            //either heroId or questId is invalid
            res.sendStatus(404);
        }else if(quest.heroId != heroId){
            //This checks to see if the given heroId does not match the quests' hero id
            res.sendStatus(400);
        }else{//both ids are valid and ids match 
            QuestsDB.getInstance().deleteQuest(questId);
            res.sendStatus(204);
        }
    });

    return router;
}