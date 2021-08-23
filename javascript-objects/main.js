var student = {
  firstName: 'Kenneth',
  lastName: 'Wang',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'CBO';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Audi',
  model: 'RS7',
  year: 2020
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of the vehicle:', vehicle);

var pet = {
  name: 'Joy',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
