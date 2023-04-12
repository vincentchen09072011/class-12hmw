const students = [
    {
      firstName: 'Darren',
      lastName: 'Chen',
      age: 30,
    },
    {
      firstName: 'Gordon',
      lastName: 'Chen',
      age: 28,
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      age: 18,
    },
  ];
  
  // Write a function that takes in an array of students and returns the total number of students: getNumStudents(students) => 3
  // Write a function that takes in an array of students and returns the average age of all the students: getAverageAge(students) => 25.333333333333332
  // Write a function that takes in an array of students and returns the oldest student: getOldestStudent(students) => { firstName: 'Darren', lastName: 'Chen', age: 30 }
  // Write a function that takes in an array of students and returns the youngest student: getYoungestStudent(students) => { firstName: 'Peter', lastName: 'Parker', age: 18 }
  // Write a function that takes in a student object and returns the full name of the student: getFullName(student) => 'Darren Chen'
  


function getnumstudent(students) {
    return students.length;
}
function getAverageAge(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
      sum += students[i].age;
    }
    return sum / students.length;
};
function getoldeststudent(students) {
    return students.sort().shift()
}
function getYoungestStudent(students) {
    return students.sort().reverse().shift()
}
function getFullName(students) {
  return students.map(student => `${student.firstName} ${student.lastName}`);
}
console.log(getnumstudent(students))
console.log(getAverageAge(students))
console.log(getoldeststudent(students))
console.log(getYoungestStudent(students))
console.log(getFullName(students))