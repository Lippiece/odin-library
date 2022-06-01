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

const _sample1 = new Book("Ulysses", "James Joyce", 661, "Modernist novel"),
	bookshelves = [];
/**
	* Populate the books section with shelves.
 */
function populateShelves() {
	const shelf    = document.createElement("article"),
		desc         = document.createElement("p"),
		removeButton = document.createElement("button");

		shelves.append(shelf);
		shelf.className = "shelf";

	shelf.append(desc, removeButton);
		desc.className = "desc";
		bookshelves.push(shelf);
	}
const tip = document.createElement("p");
/* A boolean to avoid duplication. */
let booksShown = false;
/* The show button. Loop through the books array and add the 
book description to the bookshelves array. */
show.addEventListener("click", () => {
	if (!booksShown) {
		tip.textContent = "";
		for (const _number of books) {
			populateShelves();
}
const intro = document.createElement("h2");
/* When the show button is clicked, it will add the text
"We currently have:" to the intro. It will then prepend the intro to the
booksSection. It will then loop through the books array and add the 
book description to the bookshelves array. */
show.addEventListener("click", () => {
	populateBooksSection();
	intro.textContent = "We currently have:";
	booksSection.prepend(intro);
	for (const [index, book] of books.entries()) {
		bookshelves[index].children[0].innerHTML = book.desc();
	}
});
