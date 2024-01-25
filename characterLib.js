const fs = require('node:fs')
const { json } = require('stream/consumers')

class Character{
    constructor(name, abilities, characteristics, skills){
        this.name = name
        this.game_abilities = abilities
        this.game_characteristics = characteristics
        this.game_skills = skills
        this.skills = {}
        this.characteristics = {}
        this.abilities = {}
        for(let i = 0;i<this.game_characteristics.length;i++){
            let characteristic = this.game_characteristics[i]
            this.characteristics[characteristic["name"]] = 0
        }
        for(let i = 0;i<this.game_skills.length;i++){
            let skill = this.game_skills[i]
            this.skills[skill["name"]] = "Untrained"
        }
    }
    getCharacteristics(){
        return this.characteristics
    }
    getName(){
        return this.name
    }
    getSkills(){
        return this.skills
    }
    getGameAbilities(){
        return this.game_abilities
    }
}

mythicCharacteristics = [
    {"name":"Strength", "levels":{"levelNames":["Simple"], "levelCosts":[200]}},
]
mythicSkills = [
    {"name":"Appeal", "levels":{"levelNames":["Trained","+10","+20"],"levelCosts":[200,400,600]},"Difficulty":"basic"},
]
var mythicAbilities = fs.readFileSync("Mythic Parser/parsedAbilities.json", "utf-8")

class MythicCharacter extends Character{
    constructor(name){
        super(name, mythicAbilities, mythicCharacteristics, mythicSkills)
    }
}

let John = new MythicCharacter("John")

console.log(John.getName())
console.log(John.getCharacteristics())
console.log(John.getSkills())