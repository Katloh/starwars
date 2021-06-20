import {Character, FetchesStarWarsCharacters} from "./starWars.store";

type StarWarsPeoplePage = {
    next: string
    results: Character[]
}

const allCharacters:Character[] = [
    {name:"Lea", gender:"female"},
    {name:"Lu", gender:"male"}
]

export class TestStarWarsApi implements FetchesStarWarsCharacters{
    async getAllStarWarsPeople() {
        return allCharacters
    }
}