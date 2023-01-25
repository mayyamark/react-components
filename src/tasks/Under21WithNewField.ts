import data from './data';
import { PersonalData } from './AddPerson';

export function findUnder21AddField(data: PersonalData) {
  const newArray = data
    .filter((person) => {
      if (person.age) return person.age <= 21;
    })
    .map((person) => {
      return { ...person, createdAt: new Date() };
    });
  return newArray;
}

console.log(findUnder21AddField(data));
