import {Quest} from "../types/Quest.js";

export class QuestsDB{
    static instance = undefined;
    quests = []; //quest array

    /**
     * Gets an instance of the database
     * @returns {QuestsDB} an instance of QuestsDB
     */
    static getInstance(){
        //if there is not already an instance, create one
        if(!this.instance){
            this.instance = new QuestsDB();
        }
        return this.instance;
    }

    /**
     * Gets all the quests
     * @returns an array of the quests
     */
    getQuests(){
        return this.quests;
    }

    /**
     * Gets a specific Quest given an ID
     * @param {string} id indentifier to find the quest 
     * @returns the quest if found
     */
    getQuest(id){
        return this.quests.find(quest => quest.id === id);
    }

    /**
     * Adds a quest to the database
     * @param {Quest} quest The quest to add to the database 
     */
    addQuest(quest){
        this.quests.push(quest);
    }

    /**
     * Updates a quest by id in the database
     * 
     * @param {String} id The id of the quest to update
     * @param {Partial<Quest>} questUpdates A partial quest object 
     */
    updateQuest(id, questUpdates){
        const quest = this.getQuest(id);
        this.deleteQuest(id);
        quest.updateQuest(questUpdates);
        this.addQuest(quest);
    }

    /**
     * Given a specific id of a quest, finds it and deletes it.
     * @param {String} id Id of the quest to delete 
     */
    deleteQuest(id){
        const index = this.quests.findIndex(quest => quest.id === id);
        if (index > -1){
            this.quests.splice(index,1);
        }
    }
}