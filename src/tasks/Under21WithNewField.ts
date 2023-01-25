import data from './data';

interface PersonData {
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  createdAt?: unknown;
}

type PersonalData = PersonData[];

function findUnder21AddField(data: PersonalData) {
  const newArray = data
    .filter((person) => {
      return person.age <= 21;
    })
    .map((person) => {
      return { ...person, createdAt: new Date() };
    });
  return newArray;
}

console.log(findUnder21AddField(data));

export default {};
