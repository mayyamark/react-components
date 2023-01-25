import data from './data';

function findSumOfAll() {
  const sumOfAll = data.reduce((sum, person) => {
    if (person.age <= 30) {
      return sum + person.age;
    }
    return sum;
  }, 0);
  return sumOfAll;
}

console.log(findSumOfAll());

export default {};
