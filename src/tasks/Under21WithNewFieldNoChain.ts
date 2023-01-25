import data from './data';
import { PersonalData } from './AddPerson';

export function addFieldToPeopleNoChain(data: PersonalData) {
  const under21WithAddedField = data.reduce((newArr: PersonalData, person) => {
    if (person.age && person.age <= 21) {
      newArr.push({ ...person, createdAt: new Date() });
    }
    return newArr;
  }, []);
  return under21WithAddedField;
}

console.log(addFieldToPeopleNoChain(data));
