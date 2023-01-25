import data from './data';

export function findPeopleUnder18() {
  const underAge = data.filter((person) => person.age <= 18);
  return underAge;
}

console.log(findPeopleUnder18());
