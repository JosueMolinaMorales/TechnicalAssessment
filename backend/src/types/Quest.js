import { v4 as uuid } from 'uuid';
export class Quest{
    /**
     * Creates a new quest object
     * @param {*} args A object containing quest properties
     */
    constructor(args){
        this.id = uuid()
        this.name = args.name || "Starter Quest";
        this.description = args.description || "Starter Quest";
        this.heroId = args.heroId || null;
    }

    /**
     * Updates the quest object with new update values
     * 
     * @param {Partial<Quest>} args Partial quest object
     */
    updateQuest(args){
        if(args.description){
            this.description = args.description;
        }
        if(args.name){
            this.name = args.name;
        }
        if(args.heroId){
            this.heroId = args.heroId;
        }
    }

}