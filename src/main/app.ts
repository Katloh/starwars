import axios from "axios";


const url = "https://swapi.dev/api/people"

export function getStarwarsPeople(callback: any) {
    console.log("getting");
    axios.get(url).then(function (response) {
        callback(response.data.results)
    })
}

export async function getStarwarsPeople2() {
    return (await axios.get(url)).data.results
}




