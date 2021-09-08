// ### Problem 3:
// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades
// (grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore).
//  Create a method that accepts a student name and updates the studentName of an instance of your Student Class.
//  Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array.
//  Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using
//  the class method. Add one grade object to each instance of the Student Class grade array using the class method.

// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

class Student {
  // create student class
  // required constuctor method
  constructor(studentName, codeSchoolCohort, grades) {
    this.studentName = studentName; // pass in studentName parameter
    this.codeSchoolCohort = codeSchoolCohort; // pass in codeSchoolCohort parameter
    this.grades = []; // pass in grades parameter
  }
  setStudentName() {
    // create method for changing student name
    this.studentName = prompt(
      `Please enter a new name for ${this.studentName}` // prompts user for name
    );
  }
  addGrades() {
    // create method for adding grades
    let grade = {
      // use object literal notation to add assignment name and assignment score to grade and push to grades array
      assignmentName: prompt(
        `Please enter your assignment name for ${this.studentName} in the box below` // prompt for assignment name
      ),
      assignmentScore: prompt(
        `Please enter the score your project recieved in the box below` // prompt for assignment score
      ),
    };
    this.grades.push(`${grade.assignmentName} ${grade.assignmentScore}`); // push assignment name and score to grades array
  }
  print() {
    // create print method
    console.log(
      // prints all properties to the console
      `Student Name: ${this.studentName}, Code School Cohort: ${this.codeSchoolCohort}, Grades: ${this.grades}`
    );
  }
}
let student1 = new Student("Jane Doe", "Code201"); // create student 1 and pass in attributes for student 1
let student2 = new Student("John Doe", "Code201"); // create student 2 and pass in attributes for student 2
student2.setStudentName(); // change student2 name
student1.addGrades(); // add grades for student 1
student2.addGrades(); // add grades for student 2
student1.print(); // print student 1 object
student2.print(); // print student 2 object
