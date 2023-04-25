const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'Gaming',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Coder';
console.log(person.job);

person['previousJob'] = 'Analyst';
console.log(person['previousJob']);

console.log(person);
