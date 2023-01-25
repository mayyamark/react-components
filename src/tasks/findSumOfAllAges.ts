import data from './data';
import { PersonalData } from './types';

export function findSumOfAllAges(data: PersonalData) {
  const sumOfAll = data.reduce((sum, person) => {
    if (person.age && person.age <= 30) {
      sum + person.age;
    }
    return sum;
  }, 0);
  return sumOfAll;
}

console.log(findSumOfAllAges(data));
