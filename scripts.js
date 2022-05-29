/**
 * The function Book() is a constructor function that creates a new object with the properties name,
 * author, length, and genre
 * @param name - the name of the book
 * @param author - "J.K. Rowling"
 * @param length - number of pages
 * @param genre - "Fiction"
 * @returns the string of the book's name, author, length, and genre.
 */
function Book(name, author, length, genre) {
	this.name = name;
	this.author = author;
	this.length = length;
	this.genre = genre;

	this.desc = function () {
		return `Name: "${this.name}"<br>
		Author: ${this.author}<br>
		Length: ${this.length}<br> 
		Genre: ${this.genre}<br>`;
	};

	/* Pushing the new object into the array of books. */
	books.push(this);
}

