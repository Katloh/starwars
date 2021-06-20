export type Character = {
    name: string
    gender: string
}

export interface FetchesStarWarsCharacters{
    getAllStarWarsPeople: () => Promise<Character[]>
}

export class StarWarsStore{

    private starWarsApi: FetchesStarWarsCharacters

    constructor(starWarsApi: FetchesStarWarsCharacters) {
        this.starWarsApi = starWarsApi
    }

    public async getAllFemaleStarWarsPeople():Promise<Character[]> {
        let femaleCharacters: Character[] = new Array()
        let allCharacters:Character[] = await this.starWarsApi.getAllStarWarsPeople()
        for(const person of allCharacters){
            if(person.gender === "female"){
                femaleCharacters.push(person)
            }
        }
        return femaleCharacters
    }
}











