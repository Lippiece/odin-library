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

		booksShown = true;
	}
});

/* An array that will hold the elements of the add form. */
const addFormSection = [];
/**
 * It creates a form section for adding books to the bookshelves.
 */
function populateAddFormSection() {
	tip.setAttribute("style", "opacity:0.5");
	formSection.append(tip);
	
	// Title
	const nameLabel             = document.createElement("label");
	nameLabel.textContent = "Book title:";
	const nameInput             = document.createElement("input");
	nameInput.name        = "name";
	nameInput.placeholder = "Sherlock Holmes";
	nameInput.required    = true;
	nameLabel.append(nameInput);
	addFormSection.push(nameLabel);

	// Author
	const authorLabel             = document.createElement("label");
	authorLabel.textContent = "Author:";
	const authorInput             = document.createElement("input");
	authorInput.name        = "author";
	authorInput.placeholder = "Dostoevsky";
	authorInput.required    = true;
	authorLabel.append(authorInput);
	addFormSection.push(authorLabel);

	// Length
	const lengthLabel             = document.createElement("label");
	lengthLabel.textContent = "Pages:";
	const lengthInput             = document.createElement("input");
	lengthInput.name        = "length";
	lengthInput.placeholder = "100";
	lengthInput.required    = true;
	lengthLabel.append(lengthInput);
	addFormSection.push(lengthLabel);

	// Genre
	const genreLabel             = document.createElement("label");
	genreLabel.textContent = "Genre:";
	const genreInput             = document.createElement("input");
	genreInput.name        = "genre";
	genreInput.placeholder = "Literary fiction";
	genreInput.required    = true;
	genreLabel.append(genreInput);
	addFormSection.push(genreLabel);

	// Submit
	const submitButton             = document.createElement("button");
	submitButton.textContent = "Add";
	// submitButton.type        = "reset";
	addFormSection.push(submitButton);

	submitButton.addEventListener("click", () => {		
		/* Display tip if the input fields are empty. */
		if (tip.textContent !== "Please fill out the fields." &&
			nameInput.value === "" ||
			authorInput.value === 0 ||
			lengthInput.value === 0 ||
			genreInput.value === 0) {
			tip.textContent = "Please fill out the fields.";
			return;
		}
	});
}
