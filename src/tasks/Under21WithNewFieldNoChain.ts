import data from './data';

interface PersonData {
  age: number;
  eyeColor: string;
  firstName: string;
  lastName: string;
  createdAt?: unknown;
}

interface PersonalData extends Array<PersonData> {}

export function addFieldToPeopleNoChain(data: PersonalData) {
  const under21WithAddedField = data.reduce((newArr: PersonalData, person) => {
    if (person.age <= 21) {
      const arrayWithAddedField = { ...person, createdAt: new Date() };
      newArr.push(arrayWithAddedField);
    }
    return newArr;
  }, []);
  return under21WithAddedField;
}

console.log(addFieldToPeopleNoChain(data));
