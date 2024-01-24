import json

characteristics = [
    "Strength",
    "Toughness",
    "Agility",
    "Warfare Melee",
    "Warfare Range",
    "Perception",
    "Courage",
    "Charisma",
    "Leadership"
]

levels = {
    "simple":200,
    "rookie":400,
    "intermediate":800,
    "trained":1200,
    "mastery":1600
}

characteristicAdvances =[]

for item in characteristics:
    for level in levels:
        prereq=""
        if level == "rookie":
            prereq=item+" simple"
        elif level == "intermediate":
            prereq=item+" rookie"
        elif level == "trained":
            prereq=item+" intermediate"
        elif level == "mastery":
            prereq=item+" trained"
        advance = {
            "name":item+" "+level,
            "cost":levels[level],
            "prereqs":[prereq]
        }
        characteristicAdvances.append(advance)

output_file = open("Mythic Parser/parsedCharacteristics.json", "w")
print(json.dumps(characteristicAdvances).replace("},", "},\n"), file=output_file)