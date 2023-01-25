import data from './data';

export function getPeopleUnder30() {
  const filtered = data.filter((person) => {
    return person.age <= 30;
  });
  return filtered;
}

console.log(getPeopleUnder30());
