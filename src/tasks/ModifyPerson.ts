import { PersonProps } from './AddPerson';

export const modifyPerson = (
  person: PersonProps,
  modifications?: PersonProps,
) => (modifications ? { ...person, ...modifications } : person);

const data = {
  firstName: 'Luke',
  lastName: 'Siemens',
  age: 10,
  eyeColor: 'blue',
};
const changes = { age: 5, firstName: 'JELLLLLLLLLLLLLLY' };

const newPerson = modifyPerson(data, changes);

console.log(newPerson);
