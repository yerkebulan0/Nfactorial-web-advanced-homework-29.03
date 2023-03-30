


let players = ["Gk","Def1","Def2","Def3","Def4","Midf1","Midf2","Midf3","F1","F2","F3"];
let coaches = { 
    mainCoach:"Jose.M",
    assitant: "Mikel.A",
    coachofGK:"John.A"
}
const FcAstana = {
    location: "Astana city",
    shortname: "FCA",
    isPlayOnChamLig:false,
    players:players,
    coaches:coaches,
    clubname: "Fc Astana",
    playersCount:11
}
let resultofmatch;
delete coaches.coachofGK;

console.log(FcAstana,resultofmatch);

let vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle.model = "M1";

console.log(vehicle);

delete vehicle.model;
console.log(vehicle);

let total = 0;
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130

}
 for (let value of Object.values(salaries) ){
    total+=value;
 }  
 console.log( " Total of salaries: "+ total);