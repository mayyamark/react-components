import data from './data';

export function findUnderAge() {
  const underAge = data.filter((person) => person.age <= 18);
  return underAge;
}

console.log(findUnderAge());
