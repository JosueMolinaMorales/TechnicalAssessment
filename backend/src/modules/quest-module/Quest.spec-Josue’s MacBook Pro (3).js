import { supertestSetup } from "../../test/SupertestSetup";
import { questsRouter } from "./router";

const request = supertestSetup(questsRouter);
let ID = '';

describe('Quest Module', () => {
    beforeAll(async () => {
        await request.post('/heroes/:id/quests')
        .send({
            name: "Get Pickaxe",
            description: "Use abilities to get pickaxe",
            heroId: (await request.get('/heroes')).body[0].id
        });
        const res = await request.get('/heroes/:id/quests')
        ID = res.body[0].id; //id of the quest
        //make own hero id
    });
    describe('GET /')
});
