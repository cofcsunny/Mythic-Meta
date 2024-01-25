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
class Handler{
    constructor(){
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
    constructor(name, costs, level){
        this.name = name
        this.level = level
        this.costs = costs
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


//abilities definition
mythicAbilities = [
    actionFigureHands = Ability("Action Figure Hands", 800, Prerquisite({"Strength":50}))
]
//characteristic definition
MythicCharacteristics = [
    strength = Characteristic("Strength", )
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