import {getStarwarsPeople, getStarwarsPeople2} from "../main/app";

test("can call function", (done) => {
    getStarwarsPeople((persons) => {
        for (const person of persons) {
            if (person.gender === "female") {
                console.log(person.name)
            }
        }
        done()
    });
})

test("lists all female Starwars Persons", async ()=> {
    const persons = await getStarwarsPeople2()
    for(const person of persons){
        if(person.gender === "female"){
            console.log(person.name)
        }
    }
})