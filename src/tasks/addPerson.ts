import data from './data';

interface PersonProps {
  firstName: string;
  lastName: string;
  eyeColor: string;
  age: number;
}

interface PersonalData extends Array<PersonProps> {}

function addPerson(people: PersonalData, person: PersonProps) {
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

export default {};
