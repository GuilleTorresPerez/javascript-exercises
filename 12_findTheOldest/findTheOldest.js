const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const personAge = getAge(person);
        console.log("personAge from " + person.name + ": " + personAge)
        const oldestPersonAge = getAge(oldestPerson);
        console.log("oldestPersonAge " + oldestPerson.name + ": " + oldestPersonAge);

    

        return personAge > oldestPersonAge ? person : oldestPerson; 
    })
};

function getAge(person) {
    const yearOfBirth = person.yearOfBirth;
    let yearOfDeath = person.yearOfDeath;
    
    if (yearOfDeath == null || isNaN(yearOfDeath)) {
        const date = new Date();
        yearOfDeath = date.getFullYear();
    }

    return yearOfDeath - yearOfBirth;
}










const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);



// Do not edit below this line
module.exports = findTheOldest;
