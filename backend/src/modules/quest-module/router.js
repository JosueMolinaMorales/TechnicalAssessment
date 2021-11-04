import express from 'express';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quest.js';

export function questsRouter() {
    const router = express.Router();

    // TODO: Task 1
    /**
     * Get Quests for a hero
     */
    router.get('/heroes/:id/quests', (req, res) => {
        const heroId = req.params.heroId;
        const quests = QuestsDB.getInstance().getHeroQuests(heroId);

        if(!quests){
            res.sendStatus(404);
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

    // TODO: Task 4

    return router;
}