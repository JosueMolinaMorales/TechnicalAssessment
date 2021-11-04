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
    router.post('/hereos/:id/quests', (req, res) => {
        const body = req.body;
        const quest = new Quest(body);
        QuestsDB.getInstance().addQuest(quest);
        res.sendStatus(201);
    })

    // TODO: Task 3
    /**
     * 
     */

    // TODO: Task 4

    return router;
}