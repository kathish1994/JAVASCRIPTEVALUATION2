let planets=function(a){
    return function(b){
        return "Favourite planets are " + a + " and " + b;
    };
};
let favouritePlanets=planets("Jupiter");
console.log(favouritePlanets("Earth"));
console.log(favouritePlanets("saturn"));
console.log(favouritePlanets("mars"));