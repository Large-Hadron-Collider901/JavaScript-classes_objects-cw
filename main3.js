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
    this.studentName = prompt(
      `Please enter a new name for ${this.studentName}`
    );
  }
  addGrades() {
    let grade = {
      assignmentName: prompt(
        `Please enter your assignment name for ${this.studentName} in the box below`
      ),
      assignmentScore: prompt(
        `Please enter the score your project recieved in the box below`
      ),
    };
    this.grades.push(`${grade.assignmentName} ${grade.assignmentScore}`);
  }
  print() {
    // create print method
    console.log(
      // prints all properties to the console
      `Student Name: ${this.studentName}, Code School Cohort: ${this.codeSchoolCohort}, Grades: ${this.grades}`
    );
  }
}
let student1 = new Student("Jane Doe", "Code201");
let student2 = new Student("John Doe", "Code201");
student2.setStudentName();
student1.addGrades();
student2.addGrades();
student1.print();
student2.print();
