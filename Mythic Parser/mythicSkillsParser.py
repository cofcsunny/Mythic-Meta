import json

input_file = open("Mythic Parser/skillsText.txt", "r");
output_file = open("Mythic Parser/parsedSkills.json", "w")

numbers = "0123456789"

skills = []

for skillLine in input_file.readlines():
    name = ''
    cost = ''
    trainedCost = ''
    plusTenCost = ''
    plusTwentyCost = ''
    difficulty = ''

    levelStartIndex = 0
    levelEndIndex = 0
    costStartIndex = 0
    costEndIndex = 0
    tabIndex = 0
    lineLength = len(skillLine)

    for index in range(0, lineLength):
        if skillLine[index] == '(':
            levelStartIndex = index
        elif skillLine[index] == ')':
            levelEndIndex = index
        elif skillLine[index] == '\t':
            if tabIndex == 0:
                tabIndex = index
            elif costStartIndex == 0:
                costStartIndex = index
            else:
                costEndIndex = index
    
    name = skillLine[0:levelStartIndex].replace("\t", "").strip()
    level = skillLine[levelStartIndex+1:levelEndIndex].replace("\t", "").strip()
    cost = skillLine[costStartIndex:costEndIndex].replace("\t", "")
    difficulty = skillLine[costEndIndex:lineLength-1].replace("\t", "")
    if level == "Trained":
        trainedCost = cost
    elif level == "+10":
        plusTenCost = cost
    elif level == "+20":
        plusTwentyCost = cost

    skill = {
        "name":name,
        "trainedCost":trainedCost,
        "plusTenCost":plusTenCost,
        "plusTwentyCost":plusTwentyCost,
        "difficulty":difficulty
    }
    new = True
    for existingSkill in skills:
        if existingSkill.get("name")==skill.get("name"):
            new = False
            break
        else:
            new = True
    if new==True:
        skills.append(skill)
    else:
        for existingSkill in skills:
            if existingSkill.get("name") == skill.get("name"):
                for key in existingSkill:
                    if existingSkill[key] == '':
                        existingSkill[key] = skill[key]
                        
print(json.dumps(skills).replace("},","},\n"), file=output_file)