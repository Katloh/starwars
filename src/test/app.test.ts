import {
    getStarwarsPeople,
    getStarwarsPeople2,
    getAllStarWarsPeople,
    getAllFemaleStarWarsPeople,
    Character
} from "../main/app";

test("lists all female Starwars Persons", (done) => {
    let listOfFemalePerson:string[] = new Array()
    getStarwarsPeople((persons) => {
        for (const person of persons) {
            if (person.gender === "female") {
                listOfFemalePerson.push(person.name)
            }
        }
        done()
        expect(listOfFemalePerson).toContain("Leia Organa")
        expect(listOfFemalePerson).toContain("Beru Whitesun lars")
    });
})

test("returns 82 people", async ()=> {
    const persons = await getAllStarWarsPeople()
    expect(persons.length).toStrictEqual(82)
})

test("list all female Starwars People", async ()=> {
    const NUMBER_OF_ALL_FEMALE_CHARACTERS_IN_STARWARS = 17
    let femaleCharacters: Character[] = new Array()
    femaleCharacters = await getAllFemaleStarWarsPeople()
    expect(femaleCharacters.length).toStrictEqual(NUMBER_OF_ALL_FEMALE_CHARACTERS_IN_STARWARS)
    for(const femaleCharacter of femaleCharacters){
        expect(femaleCharacter.gender).toStrictEqual("female")
    }
})

