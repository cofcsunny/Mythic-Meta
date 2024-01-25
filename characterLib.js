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
        //
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

//Mythic World Constants

mythicCharacteristicLevels = [{"Simple":200}, {"Rookie":400}, {"Intermediate":800}, {"Trained":1200}, {"Mastery":1600}]
mythicSkillLevels = ["Trained", "+10", "+20"]



//abilities definition
mythicAbilities = [
    actionFigureHands = Ability("Action Figure Hands", 800, Prerquisite({"Strength":50}))
]


/////attempt at loops
characteristicStrings = ["Strength", "Toughness"]
characteristicList = []

for(char in characteristicStrings){
    characteristicList+=Characteristic(char, Handler("Characteristic", mythicCharacteristicLevels))
}

/////

//advance handler definition

strengthHandler = Handler()

appealHandler = Handler()
athleticsHandler = Handler()

//characteristic definition
MythicCharacteristics = [
    strength = Characteristic("Strength")
]
//skills definition
mythicSkills = [
    appeal = Skill("Appeal", [200,400,600], "basic"),
    athletics = Skill("Athletics", [200, 400, 600], "basic")
]

//Mythic specific for testing
class MythicCharacter extends Character{
    constructor(name){
        super(name, mythicAbilities, mythicSkills)
    }
}

John = MythicCharacter("John")