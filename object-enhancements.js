//Same keys and values
/*
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

//ES2015
function createInstructor(firstName, lastName){
    return{
        firstName, 
        lastName
    };
}


//Computed Property Names
/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

//ES2015
const favoriteNumber = 42;
const instructor1 = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite!"
};


//Object Methods
/*
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

//ES2015
const instructor2 = {
    firstName: "Colt",
    sayHi (){
        return "Hi!";
    }, 
    sayBye (){
        return this.firstName + " says bye!";
    }
}


//createAnimal function
function createAnimal(species, verb, noise){
    return {
        species, 
        [verb](){
            return noise;
        }
    };
}
