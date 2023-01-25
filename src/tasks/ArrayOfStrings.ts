import data from './data';

function makeArrayOfFullNames() {
  const allFullNames = data.map((person) => {
    return `${person.firstName} ${person.lastName}`;
  });
  return allFullNames;
}

console.log(makeArrayOfFullNames());

export default {};
