import {
    Character, StarWarsStore
} from "../main/starWars.store";
import {StarWarsApi} from "../main/starWars.api";
import {TestStarWarsApi} from "../main/TestStarWars.api";

test("lists all female Starwars Persons", (done) => {
    let listOfFemalePerson:string[] = new Array()
    const starWarsApi = new StarWarsApi()
    starWarsApi.getStarwarsPeople((persons) => {
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
    const starWarsApi = new StarWarsApi()
    const persons = await starWarsApi.getAllStarWarsPeople()
    expect(persons.length).toStrictEqual(82)
})

test("list all female Starwars People", async ()=> {
    const NUMBER_OF_ALL_FEMALE_CHARACTERS_IN_STARWARS = 1
    let femaleCharacters: Character[] = new Array()
    const testStarWarsApi = new TestStarWarsApi()
    const starWarsStore = new StarWarsStore(testStarWarsApi)
    femaleCharacters = await starWarsStore.getAllFemaleStarWarsPeople()
    expect(femaleCharacters.length).toStrictEqual(NUMBER_OF_ALL_FEMALE_CHARACTERS_IN_STARWARS)
    for(const femaleCharacter of femaleCharacters){
        expect(femaleCharacter.gender).toStrictEqual("female")
    }
})

