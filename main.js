// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
// Create a function that prints all properties. Create an instance of the class and use the function.

class GitHubRepository {
  // Create my GithubRepository class
  // required constructor method
  constructor(userName, fileName, descriptionOfRepository, codeURL) {
    this.userName = userName; // pass in userName parameter
    this.fileName = fileName; // pass in fileName parameter
    this.descriptionOfRepository = descriptionOfRepository; // pass in descriptionOfRepository parameter
    this.codeURL = codeURL; // pass in codeURL parameter
  }
  print() {
    // create print method
    console.log(
      // prints all properties to the console
      `GitHub Username: ${this.userName}, File Name: ${this.fileName}, Description of Repo: ${this.descriptionOfRepository}, Code URL: ${this.codeURL}`
    );
  }
}

let repo1 = new GitHubRepository( // create a new instance of the class
  "Large-Hadron-Collider901", // pass in userName for repo1
  "Botanic-Memory-Match-Game", // pass in fileName for repo1
  "Memory match card game with botanic flower theme", // pass in descriptionOfRepository for repo1
  "https://github.com/Large-Hadron-Collider901/Botanic-Memory-Match-Game" // pass in codeURL for repo1
);
repo1.print();
