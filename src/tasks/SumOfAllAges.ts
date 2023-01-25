import data from './data';

function findSumOfAll() {
  const sum = data
    .filter((person) => person.age <= 30)
    .reduce((sum, person) => sum + person.age, 0);
  return sum;
}

console.log(findSumOfAll());

export default {};
