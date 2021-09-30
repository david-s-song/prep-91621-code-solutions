var person = {
  firstName: 'Caden',
  lastName: 'Song',
  hobby: 'Dancing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
fullName = "The person's name is: " + fullName;
console.log(fullName);

person.job = 'Modeling';
console.log("The person's current job is: ", person.job);

person.previousJob = 'Singing';
console.log("The person's previous job is: ", person.previousJob);

console.log(person);
