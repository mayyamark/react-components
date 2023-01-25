import data from './data';

interface PersonData {
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  createdAt?: unknown;
}

interface PersonalData extends Array<PersonData> {}

function findUnder21AddField(data: PersonalData) {
  const newArray = data
    .filter((person) => {
      const filtered = person.age <= 21;
      return filtered;
    })
    .map((person) => {
      return { ...person, createdAt: new Date() };
    });
  return newArray;
}

console.log(findUnder21AddField(data));

export default {};
