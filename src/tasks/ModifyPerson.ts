interface PersonData {
  age?: number;
  eyeColor?: string;
  firstName?: string;
  lastName?: string;
}

const modifyPerson = (person: PersonData, modifications?: PersonData) =>
  modifications ? { ...person, ...modifications } : person;

const data = {
  firstName: 'Luke',
  lastName: 'Siemens',
  age: 10,
  eyeColor: 'blue',
};
const changes = { age: 5, firstName: 'JELLLLLLLLLLLLLLY' };

const newPerson = { ...modifyPerson(data, changes) };

console.log(newPerson);

export default {};
