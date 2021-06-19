import axios from "axios";


let url = "https://swapi.dev/api/people"

export function getStarwarsPeople(callback: any) {
    console.log("getting");
    axios.get(url).then(function (response) {
        callback(response.data.results)
    })
}

export async function getStarwarsPeople2() {
    return (await axios.get(url)).data.results
}

type StarWarsPeoplePage = {
    next: string
    results: Character[]
}

export type Character = {
    name: string
    gender: string
}

export async function getAllStarWarsPeople() {
    let allCharacters: Character[] = new Array()

    do{
        let data = (await axios.get<StarWarsPeoplePage>(url)).data
        allCharacters.push(...data.results)
        url = data.next
    } while (url !== null)

    return allCharacters
}

export async function getAllFemaleStarWarsPeople():Promise<Character[]> {
    let femaleCharacters: Character[] = new Array()
    let allCharacters:Character[] = await getAllStarWarsPeople()
    for(const person of allCharacters){
        if(person.gender === "female"){
            femaleCharacters.push(person)
        }
    }
    return femaleCharacters
}








