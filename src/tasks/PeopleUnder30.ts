import data from './data';

export function getPeopleUnderThirty() {
  const filtered = data.filter((person) => {
    return person.age <= 30;
  });
  return filtered;
}

console.log(getPeopleUnderThirty());
