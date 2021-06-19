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
    let listOfStarWarsPeopleOfPage: Character[] = new Array()
    let listOfAllStarWarsPeople: Character[] = new Array()

    do{
        let data: StarWarsPeoplePage = (await axios.get<StarWarsPeoplePage>(url)).data
        listOfStarWarsPeopleOfPage = data.results
        listOfAllStarWarsPeople.push(...listOfStarWarsPeopleOfPage)
        url = data.next
    } while (url !== null)

    return listOfAllStarWarsPeople
}

export async function getAllFemaleStarWarsPeople():Promise<Character[]> {
    let listOfAllFemaleStarWarsPeople: Character[] = new Array()
    let listOfAllStarWarsPeople:Character[] = await getAllStarWarsPeople()
    for(const person of listOfAllStarWarsPeople){
        if(person.gender === "female"){
            listOfAllFemaleStarWarsPeople.push(person)
        }
    }
    return listOfAllFemaleStarWarsPeople
}








