import data from './data';

interface PersonData {
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  createdAt?: string;
}

interface PersonalData extends Array<PersonData> {}

function addNewField(data: PersonalData) {
  return data.map((person) => {
    return { ...person, createdAt: new Date() };
  });
}

console.log(addNewField(data));

export default {};
