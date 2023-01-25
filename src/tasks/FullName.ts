import data from './data';

interface PersonData {
  firstName: string | string[];
  lastName: string | string[];
}

function fullName(person: PersonData) {
  return person.firstName + ' ' + person.lastName;
}

const arrayOfFullNames = data.map((person) => {
  return fullName(person);
});

let Tom = fullName({ firstName: 'Tom', lastName: 'Hank' });

console.log(arrayOfFullNames);
console.log(Tom);

export default {};
