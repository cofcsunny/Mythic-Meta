class Character{
    constructor(name, abilities, characteristics, skills){
        this.name = name
        this.game_abilities = abilities
        this.game_characteristics = characteristics
        this.game_skills = skills
        this.skills = {}
        this.characteristics = {}
        for(characteristic in this.game_characteristics){
            this.characteristics[characteristic["name"]] = 0
        }
        for(skill in this.game_skills){
            this.skills[skill["name"]] = "Untrained"
        }
    }
}

mythicCharacteristics = [
    {"name":"Strength", "levels":{"levelNames":["Simple"], "levelCosts":[200]}},
]
mythicSkills = [
    {"name":"Appeal", "levels":{"levelNames":["Trained","+10","+20"],"levelCosts":[200,400,600]},"Difficulty":"basic"},
]
mythicAbilities = [
    {"name":"Action Figure Hands", "cost":800, "description":"description"},
]
class MythicCharacter extends Character{
    constructor(name){
        super(name, mythicAbilities, mythicCharacteristics, mythicSkills)
    }
}

John = MythicCharacter("John")

