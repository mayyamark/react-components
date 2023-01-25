import data from './data';
import { PersonalData } from './AddPerson';

function addNewField(data: PersonalData) {
  return data.map((person) => {
    return { ...person, createdAt: new Date() };
  });
}

console.log(addNewField(data));

export default {};
