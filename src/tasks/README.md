Implement the following tasks by using the JSON at the bottom of the page. Create a separate file for each task. Use TypeScript.

1. Create an array of strings, which contains only the full names
1. Filter all people under `30`, inclusive
1. Add a new field `createdAt` for each object in the array - use `new Date()` as a value - no mutations
1. Find the sum of all ages, under `30`, inclusive (answer: `852`)
1. Find all under `18`, inclusive
1. Find the person, called `Terry`
1. Filter all under `21`, inclusive, and add `createdAt` - use chaining
1. Do the same without chaining, use only one method
1. Implement `createPerson`
   - accepts 4 params - `firstName`, `lastName`, `age`, `eyeColor`
   - should return a new object with the 4 values - no mutations
1. Implement `addPerson`
   - accepts 2 params - array of people and a `person` object
   - add a new `person` object to our array - no mutations
1. Implement `fullName`
   - accepts `person` object
   - returns a string of the full name of the person
   - implement the first task again by using the new `fullName` function
1. Implement `modifyPerson`
   - accepts a `person` object and an object of fields to modify
   - if no fileds are passed, return the same `person` object
   - if some fields are passed - return the `person` object with the modified properties - no mutations

```
[
  {
    "age": 21,
    "eyeColor": "blue",
    "firstName": "Bowman",
    "lastName": "Parks"
  },
  {
    "age": 49,
    "eyeColor": "green",
    "firstName": "Eaton",
    "lastName": "Mcconnell"
  },
  {
    "age": 46,
    "eyeColor": "brown",
    "firstName": "Alfreda",
    "lastName": "Dixon"
  },
  {
    "age": 28,
    "eyeColor": "blue",
    "firstName": "Terry",
    "lastName": "Hickman"
  },
  {
    "age": 47,
    "eyeColor": "brown",
    "firstName": "Byers",
    "lastName": "Henderson"
  },
  {
    "age": 27,
    "eyeColor": "brown",
    "firstName": "Anita",
    "lastName": "Haynes"
  },
  {
    "age": 42,
    "eyeColor": "green",
    "firstName": "Walls",
    "lastName": "Mendez"
  },
  {
    "age": 21,
    "eyeColor": "brown",
    "firstName": "Kellie",
    "lastName": "Clayton"
  },
  {
    "age": 50,
    "eyeColor": "blue",
    "firstName": "Dorothea",
    "lastName": "Boyle"
  },
  {
    "age": 45,
    "eyeColor": "green",
    "firstName": "Jacqueline",
    "lastName": "Brennan"
  },
  {
    "age": 35,
    "eyeColor": "green",
    "firstName": "Sloan",
    "lastName": "Ruiz"
  },
  {
    "age": 38,
    "eyeColor": "brown",
    "firstName": "Florence",
    "lastName": "Keith"
  },
  {
    "age": 21,
    "eyeColor": "green",
    "firstName": "Gordon",
    "lastName": "Gibbs"
  },
  {
    "age": 33,
    "eyeColor": "blue",
    "firstName": "Butler",
    "lastName": "Sargent"
  },
  {
    "age": 25,
    "eyeColor": "green",
    "firstName": "Powell",
    "lastName": "Clay"
  },
  {
    "age": 32,
    "eyeColor": "blue",
    "firstName": "Charity",
    "lastName": "Levine"
  },
  {
    "age": 25,
    "eyeColor": "brown",
    "firstName": "Shauna",
    "lastName": "Harris"
  },
  {
    "age": 34,
    "eyeColor": "green",
    "firstName": "Avila",
    "lastName": "Johnson"
  },
  {
    "age": 32,
    "eyeColor": "brown",
    "firstName": "Juanita",
    "lastName": "Waller"
  },
  {
    "age": 46,
    "eyeColor": "blue",
    "firstName": "Maribel",
    "lastName": "Hartman"
  },
  {
    "age": 42,
    "eyeColor": "blue",
    "firstName": "Virgie",
    "lastName": "Castaneda"
  },
  {
    "age": 18,
    "eyeColor": "green",
    "firstName": "Dee",
    "lastName": "Cooley"
  },
  {
    "age": 19,
    "eyeColor": "green",
    "firstName": "Marietta",
    "lastName": "Mays"
  },
  {
    "age": 40,
    "eyeColor": "blue",
    "firstName": "House",
    "lastName": "Gross"
  },
  {
    "age": 37,
    "eyeColor": "green",
    "firstName": "Copeland",
    "lastName": "Hester"
  },
  {
    "age": 26,
    "eyeColor": "blue",
    "firstName": "Serrano",
    "lastName": "Wynn"
  },
  {
    "age": 45,
    "eyeColor": "green",
    "firstName": "Inez",
    "lastName": "Donaldson"
  },
  {
    "age": 34,
    "eyeColor": "green",
    "firstName": "Johns",
    "lastName": "Neal"
  },
  {
    "age": 48,
    "eyeColor": "blue",
    "firstName": "Spencer",
    "lastName": "Aguilar"
  },
  {
    "age": 30,
    "eyeColor": "brown",
    "firstName": "Price",
    "lastName": "Molina"
  },
  {
    "age": 46,
    "eyeColor": "brown",
    "firstName": "Beatrice",
    "lastName": "Mullins"
  },
  {
    "age": 31,
    "eyeColor": "brown",
    "firstName": "Jodi",
    "lastName": "King"
  }
]
```
