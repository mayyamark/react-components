import data from './data';
import { PersonProps, PersonalData } from './types';

export function addPerson(people: PersonalData, person: PersonProps) {
  const arrayWithAddedPerson = [...people, person];
  return arrayWithAddedPerson;
}

let person = {
  firstName: 'Si',
  lastName: 'Senior',
  eyeColor: 'blue',
  age: 5,
};

console.log(addPerson(data, person));
