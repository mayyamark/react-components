interface PersonData {
  age?: number;
  eyeColor?: string;
  firstName?: string;
  lastName?: string;
}

const modifyPerson = (person: PersonData, modifications?: PersonData) =>
  modifications ? { ...person, ...modifications } : person;

let data = {
  firstName: 'Luke',
  lastName: 'Siemens',
  age: 10,
  eyeColor: 'blue',
};
let changes = { age: 5, firstName: 'JELLLLLLLLLLLLLLY' };

let newPerson = { ...modifyPerson(data, changes) };

console.log(newPerson);

export default {};
