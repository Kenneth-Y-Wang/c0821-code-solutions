var books = [
  {
    isbn: '9780316362481',
    title: 'The Sweetness of Water',
    author: 'Nathan Harris'
  },
  {
    isbn: '9781982127619',
    title: 'The Butterfly House',
    author: 'Katrine Engberg'
  },
  {
    isbn: '9781496730169',
    title: 'Breaking Badger: A Hilarious Shifter Romance',
    author: 'Shelly Laurenston'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof (books));

var result = JSON.stringify(books);
console.log('result of JSON.stringify:', result);
console.log('typeof result:', typeof (result));

var student = '[{ "id": 907, "name": "Kenneth Wang" }]';
console.log('student:', student);
console.log('typeof student:', typeof (student));

var studentObj = JSON.parse(student);
console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof (studentObj));
