const buttons = document.querySelectorAll("button");
// const add = buttons[0];
const show = buttons[1];
const remove = buttons[2];

const sections = document.querySelectorAll("section");
// const controlsSection = sections[0];
const booksSection = sections[1];

const divs = document.querySelectorAll("div");
const shelves = divs[0];

const books = [];

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

const bookshelves = [];
/**
 * It generates the header and the book cards
 */
function populateBooksSection() {
	for (const _number of books) {
		const shelf = document.createElement("article");
		const desc = document.createElement("p");
		shelves.append(shelf);
		shelf.className = "shelf";
		shelf.append(desc);
		desc.className = "desc";
		bookshelves.push(shelf);
	}
}

