export function createPerson(
  firstName: string,
  lastName: string,
  eyeColor: string,
  age: number,
) {
  return {
    firstName,
    lastName,
    eyeColor,
    age,
  };
}

let Tom = createPerson('Hello', 'Bye', 'Goodbye', 3);

console.log(Tom);
