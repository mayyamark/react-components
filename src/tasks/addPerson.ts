import data from './data';

export interface PersonProps {
  firstName?: string;
  lastName?: string;
  eyeColor?: string;
  age?: number;
  createdAt?: string;
}

export interface PersonalData extends Array<PersonProps> {}

export function addPerson(people: PersonalData, person: PersonProps) {
  const arrayWithAddedPerson = [...people, person];
  return {
    arrayWithAddedPerson,
  };
}

let person = {
  firstName: 'Si',
  lastName: 'Senior',
  eyeColor: 'blue',
  age: 5,
};

console.log(addPerson(data, person));
