import data from './data';
import { PersonProps } from './types';

export function fullName(person: PersonProps) {
  return `${person.firstName} ${person.lastName}`;
}

const arrayOfFullNames = data.map((person) => {
  return fullName(person);
});

let Tom = fullName({ firstName: 'Tom', lastName: 'Hank' });

console.log(arrayOfFullNames);
console.log(Tom);
