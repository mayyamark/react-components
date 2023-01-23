const data = [
  {
    age: 21,
    eyeColor: 'blue',
    firstName: 'Bowman',
    lastName: 'Parks',
  },
  {
    age: 49,
    eyeColor: 'green',
    firstName: 'Eaton',
    lastName: 'Mcconnell',
  },
  {
    age: 46,
    eyeColor: 'brown',
    firstName: 'Alfreda',
    lastName: 'Dixon',
  },
  {
    age: 28,
    eyeColor: 'blue',
    firstName: 'Terry',
    lastName: 'Hickman',
  },
  {
    age: 47,
    eyeColor: 'brown',
    firstName: 'Byers',
    lastName: 'Henderson',
  },
  {
    age: 27,
    eyeColor: 'brown',
    firstName: 'Anita',
    lastName: 'Haynes',
  },
  {
    age: 42,
    eyeColor: 'green',
    firstName: 'Walls',
    lastName: 'Mendez',
  },
  {
    age: 21,
    eyeColor: 'brown',
    firstName: 'Kellie',
    lastName: 'Clayton',
  },
  {
    age: 50,
    eyeColor: 'blue',
    firstName: 'Dorothea',
    lastName: 'Boyle',
  },
  {
    age: 45,
    eyeColor: 'green',
    firstName: 'Jacqueline',
    lastName: 'Brennan',
  },
  {
    age: 35,
    eyeColor: 'green',
    firstName: 'Sloan',
    lastName: 'Ruiz',
  },
  {
    age: 38,
    eyeColor: 'brown',
    firstName: 'Florence',
    lastName: 'Keith',
  },
  {
    age: 21,
    eyeColor: 'green',
    firstName: 'Gordon',
    lastName: 'Gibbs',
  },
  {
    age: 33,
    eyeColor: 'blue',
    firstName: 'Butler',
    lastName: 'Sargent',
  },
  {
    age: 25,
    eyeColor: 'green',
    firstName: 'Powell',
    lastName: 'Clay',
  },
  {
    age: 32,
    eyeColor: 'blue',
    firstName: 'Charity',
    lastName: 'Levine',
  },
  {
    age: 25,
    eyeColor: 'brown',
    firstName: 'Shauna',
    lastName: 'Harris',
  },
  {
    age: 34,
    eyeColor: 'green',
    firstName: 'Avila',
    lastName: 'Johnson',
  },
  {
    age: 32,
    eyeColor: 'brown',
    firstName: 'Juanita',
    lastName: 'Waller',
  },
  {
    age: 46,
    eyeColor: 'blue',
    firstName: 'Maribel',
    lastName: 'Hartman',
  },
  {
    age: 42,
    eyeColor: 'blue',
    firstName: 'Virgie',
    lastName: 'Castaneda',
  },
  {
    age: 18,
    eyeColor: 'green',
    firstName: 'Dee',
    lastName: 'Cooley',
  },
  {
    age: 19,
    eyeColor: 'green',
    firstName: 'Marietta',
    lastName: 'Mays',
  },
  {
    age: 40,
    eyeColor: 'blue',
    firstName: 'House',
    lastName: 'Gross',
  },
  {
    age: 37,
    eyeColor: 'green',
    firstName: 'Copeland',
    lastName: 'Hester',
  },
  {
    age: 26,
    eyeColor: 'blue',
    firstName: 'Serrano',
    lastName: 'Wynn',
  },
  {
    age: 45,
    eyeColor: 'green',
    firstName: 'Inez',
    lastName: 'Donaldson',
  },
  {
    age: 34,
    eyeColor: 'green',
    firstName: 'Johns',
    lastName: 'Neal',
  },
  {
    age: 48,
    eyeColor: 'blue',
    firstName: 'Spencer',
    lastName: 'Aguilar',
  },
  {
    age: 30,
    eyeColor: 'brown',
    firstName: 'Price',
    lastName: 'Molina',
  },
  {
    age: 46,
    eyeColor: 'brown',
    firstName: 'Beatrice',
    lastName: 'Mullins',
  },
  {
    age: 31,
    eyeColor: 'brown',
    firstName: 'Jodi',
    lastName: 'King',
  },
];

function UnderThirty() {
  const filtered = data.filter(function (person) {
    return person.age <= 30;
  });
  return filtered;
}

console.log(UnderThirty());

export default {};
