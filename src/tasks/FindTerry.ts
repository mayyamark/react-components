import data from './data';

export function findTerry() {
  const man = data.find((person) => person.firstName === 'Terry');
  return man;
}

console.log(findTerry());
