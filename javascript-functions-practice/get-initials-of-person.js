/* exported getInitialsOfPerson */
// function getInitialsOfPerson(person) {
//   return person.firstName[0] + person.lastName[0];
// }

const getInitialsOfPerson = person => `${person.firstName[0]}${person.lastName[0]}`;
