import data from './data';

function findTerry() {
  const man = data.find((person) => person.firstName === 'Terry');
  return man;
}

console.log(findTerry());

export default {};
