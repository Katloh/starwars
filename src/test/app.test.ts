import {getStarwarsPeople, getStarwarsPeople2} from "../main/app";

test("can call function", (done) => {
    let listOfFemalePerson:string[] = new Array()
    getStarwarsPeople((persons) => {
        for (const person of persons) {
            if (person.gender === "female") {
                listOfFemalePerson.push(person.name)
            }
        }
        done()
        expect(listOfFemalePerson).toContain('Leia Organa')
        expect(listOfFemalePerson).toContain('Beru Whitesun lars')
    });
})

test("lists all female Starwars Persons", async ()=> {
    let listOfFemalePerson:string[] = new Array()
    const persons = await getStarwarsPeople2()
    for(const person of persons){
        if(person.gender === "female"){
            listOfFemalePerson.push(person.name)
        }
    }
    expect(listOfFemalePerson).toContain("Leia Organa")
    expect(listOfFemalePerson).toContain("Beru Whitesun lars")
})