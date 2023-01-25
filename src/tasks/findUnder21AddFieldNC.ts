import data from './data';
import { PersonalData } from './types';

export function findUnder21AddFieldNC(data: PersonalData) {
  const under21WithAddedField = data.reduce((newArr: PersonalData, person) => {
    if (person.age && person.age <= 21) {
      newArr.push({ ...person, createdAt: new Date() });
    }
    return newArr;
  }, []);
  return under21WithAddedField;
}

console.log(findUnder21AddFieldNC(data));
