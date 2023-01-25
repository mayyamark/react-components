import data from './data';

export function findSumOfAll() {
  const sumOfAll = data.reduce((sum, person) => {
    if (person.age <= 30) {
      sum + person.age;
    }
    return sum;
  }, 0);
  return sumOfAll;
}

console.log(findSumOfAll());
