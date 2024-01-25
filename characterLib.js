//bsae
class Prerquisite{
    constructor(strings){
        //
    }
}
class Ability{
    constructor(name, prerquisites){
        //
    }
}
class Handler{//an advance handler
    constructor(type, levels){
        this.type = type
        this.levels = levels
        switch(type){
            case "Characteristic":
                //
                break;
            case "Skill":
                //
                break;
            case "Ability":
                //
                break;
            default:
                break;
        }
    }
}
class Skill{
    constructor(name, costs, handler){
        this.name = name
        this.costs = costs
        this.handler = handler
    }
    constructor(name, costs, handler, difficulty){
        this.name = name
        this.costs = costs
        this.handler = handler
        this.difficulty = difficulty
    }
}
class Characteristic{
    constructor(name, handler){
        this.name = name
        this.handler = handler
    }
}
class Character{
    constructor(name, abilities, characteristics, skills){
        this.name = name
        this.abilities = abilities
        this.characteristics = characteristics
        this.skills = skills
    }
}

class World{
    constructor(){
        //
    }
}
//^world in case I need it for keeping track of objects
//Mythic World Constants

mythicCharacteristicLevels = [{"Simple":200}, {"Rookie":400}, {"Intermediate":800}, {"Trained":1200}, {"Mastery":1600}]
mythicSkillLevels = ["Trained", "+10", "+20"]

mythicCharacteristics = ["Strength", "Toughness", "Etc"]
mythicSkills = [{"Appeal":[200,400,600],"Difficulty":"basic"}, {"Athletics":[200,400,600],"Difficulty":"basic"}]


/////attempt at loops
characteristicStrings = ["Strength", "Toughness"]
characteristicList = []

for(char in characteristicStrings){
    characteristicList+=Characteristic(char, Handler("Characteristic", mythicCharacteristicLevels))
}



mythicAbilities = [
    actionFigureHands = Ability("Action Figure Hands", "Description...", Handler("Ability", 800, Prerquisite({"Strength":50})))
]
/////


//Mythic specific for testing
class MythicCharacter extends Character{
    constructor(name){
        super(name, mythicAbilities, mythicSkills)
    }
}

John = MythicCharacter("John")