import json

input_file = open("Mythic Parser/abilitiesText.txt", "r");
output_file = open("Mythic Parser/parsedAbilities.json", "w")

numbers = "0123456789"

abilities = []

for abilityLine in input_file.readlines():
    abilityLine = abilityLine.replace("\tAbility", "").replace(",", "", 1)
    name = ''
    cost = ''
    prerequisites = []

    xpIndex = 0
    lineLength = len(abilityLine)

    for index in range(0, lineLength):
        if abilityLine[index] in numbers:
            xpIndex=index
            break
    name = abilityLine[0:xpIndex].strip().replace("\tAbility", "")
    cost = abilityLine[xpIndex:xpIndex+4].strip()

    prerequisiteEnd = 0
    prerequisiteStart = 0
    colonIndexes = []

    for index in range(xpIndex+4, lineLength):
        if abilityLine[index] == ":":
            colonIndexes.append(index)

    for i in range(0, len(colonIndexes)):
        for index in range(colonIndexes[i],lineLength):
            if abilityLine[index] in numbers:
                prerequisiteEnd = index
                if i==0:
                    prerequisites.append(abilityLine[xpIndex+4:prerequisiteEnd+3].strip())
                else:
                    prerequisites.append(abilityLine[prerequisiteStart+2:prerequisiteEnd+3].strip())
                prerequisiteStart = index
                break
            

    ability = {
        "name":name,
        "cost":cost,
        "prerequisites":prerequisites
    }
    abilities.append(ability)

print(json.dumps(abilities).replace("},","},\n"), file=output_file)

