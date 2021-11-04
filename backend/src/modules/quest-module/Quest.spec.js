import { supertestSetup } from "../../test/SupertestSetup";
import { questsRouter } from "./router";

const request = supertestSetup(questsRouter);
let ID = '';

describe('Quest Module', () => {
    beforeAll(async () => {
        await request.post('/heros/:id/quests')
        .send({
            name: "Get Pickaxe",
            description: "Use abilities to get pickaxe",
            heroId: 'abc'
        });
        const res = await request.get('/heroes/:id/quests')
        ID = res.body[0].id; //id of the quest
    });
});
