import axios from "axios";
import {Character} from "./starWars.store";

type StarWarsPeoplePage = {
    next: string
    results: Character[]
}

export class StarWarsApi{
    private url:string = "https://swapi.dev/api/people"

    getStarwarsPeople(callback: any) {
        console.log("getting");
        axios.get(this.url).then(function (response) {
            callback(response.data.results)
        })
    }


    async getAllStarWarsPeople() {
        let allCharacters: Character[] = new Array()

        do{
            let data = (await axios.get<StarWarsPeoplePage>(this.url)).data
            allCharacters.push(...data.results)
            this.url = data.next
        } while (this.url !== null)

        return allCharacters
    }
}

