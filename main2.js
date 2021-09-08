// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased.
// Create a method to change the rating and another one to change the yearReleased properties using prompt.
// Create an instance of the class and use the two methods you created.

class Movie {
  // Create my Movie class
  // required constructor method
  constructor(movieName, rating, yearReleased) {
    this.movieName = movieName; // pass in movieName parameter
    this.rating = rating; // pass in rating parameter
    this.yearReleased = yearReleased; // pass in yearReleased parameter
  }
  print() {
    // create print method
    console.log(
      `Movie Name: ${this.movieName}, Rating: ${this.rating}, Year Released: ${this.yearReleased}`
    );
  }
  setRating() {
    // create setRating method
    this.rating = prompt(
      `Please enter your rating for ${movie1.movieName} out of 5 stars` // Prompt user to enter rating
    );
  }

  setYearReleased() {
    // create setYearReleased method
    this.yearReleased = prompt(
      `Please enter year released for ${this.movieName}` // prompt user to enter yearReleased
    );
  }
}

let movie1 = new Movie("A Gray State", "4.2", "2017");
movie1.setRating();
movie1.setYearReleased();
movie1.print();
