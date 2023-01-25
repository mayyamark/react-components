import data from './data';
import { PersonalData } from './AddPerson';

export function addFieldToPeopleNoChain(data: PersonalData) {
  const under21WithAddedField = data.reduce((newArr: PersonalData, person) => {
    if (person.age && person.age <= 21) {
      const arrayWithAddedField = { ...person, createdAt: new Date() };
      newArr.push(arrayWithAddedField);
    }
    return newArr;
  }, []);
  return under21WithAddedField;
}

console.log(addFieldToPeopleNoChain(data));
