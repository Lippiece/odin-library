/* buttons */
const buttons = document.querySelectorAll("button"),
	    add     = buttons[0],
	    show    = buttons[1],
	/* 	
	sections */
	sections     = document.querySelectorAll("section"),
	booksSection = sections[1],
	formSection  = sections[2],
	/* 
	divs */
	divs    = document.querySelectorAll("div"),
	shelves = divs[0],
	/* 
	main books array */
	books = [];

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
	this.name   = name;
	this.author = author;
	this.length = length;
	this.genre  = genre;

	this.desc = function () {
		return `Name: "${this.name}"<br>
		Author: ${this.author}<br>
		Length: ${this.length}<br>
		Genre : ${this.genre}<br>`;
	};
	this.read = () => {
		const readButton = document.createElement("button"),
			readIcon = document.createElement("span");
		let readStatus = false;

		readButton.append(readIcon);
		readIcon.setAttribute("class", "iconify");
		readIcon.dataset.icon = "gg:read";
		readButton.addEventListener("click", () => {
			if (readStatus) {
				readIcon.dataset.icon = "gg:read";
				readButton.style.backgroundColor = "green";
				readStatus = false;

				return;
			}
			readIcon.dataset.icon = "gg:read-solid";
			readButton.style.backgroundColor = "red";
			readStatus = true;
		});

		return readButton;
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
	const shelf = document.createElement("article"),
		desc = document.createElement("p"),
		removeButton = document.createElement("button"),
		removeIcon = document.createElement("span");

	shelves.append(shelf);
	shelf.className = "shelf";

	shelf.append(desc, removeButton);
	// Remove button
	removeButton.append(removeIcon);
	removeIcon.setAttribute("class", "iconify");
	removeIcon.dataset.icon = "ic:round-playlist-remove";
	removeButton.addEventListener("click", (event) => {
		event.target.parentNode.remove();
		/* Remove the book from the books array and the shelf from the shelves array */
		books.splice(bookshelves.indexOf(event.target.parentNode), 1);
		bookshelves.splice(bookshelves.indexOf(event.target.parentNode), 1);
	});
	bookshelves.push(shelf);
}
const tip = document.createElement("p");
/* A boolean to avoid duplication. */
let booksShown = false;

tip.textContent = "Tip: use TABS to navigate between input fields.";
/* The show button. Loop through the books array and add the 
book description to the bookshelves array. */
show.addEventListener("click", () => {
	const intro = document.createElement("h2");

	booksSection.style.setProperty("--bg-opacity","0.2");
		tip.textContent = "";
		for (const _number of books) {
			populateShelves();
		}
		const intro = document.createElement("h2");
		intro.textContent = "We currently have:";
		booksSection.prepend(intro);

		for (const [index, book] of books.entries()) {
			bookshelves[index].children[0].innerHTML = book.desc();
		bookshelves[index].append(book.read());
		}
		booksShown = true;
	show.remove();
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
	const nameLabel = document.createElement("label"),
		nameInput = document.createElement("input");

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
		nameInput.focus();
		/* Display tip if the input fields are empty. */
		if (nameInput.value === "" ||
			authorInput.value === "" ||
			lengthInput.value === "" ||
			genreInput.value === "") {
			tip.textContent = "Please fill out the fields.";

			return;
		}

		/* Check if the books have been shown. If they haven't, display a tip. */
		if (!booksShown) {
			tip.setAttribute("style", "opacity:1");
			tip.textContent = 
				"The new books will be shown when you click ";
			tip.append(show);
		}
				
		/* Create a new book object and then add it to the bookshelves array. */
		const _newBook = new Book(
			nameInput.value,
			authorInput.value,
			lengthInput.value,
			genreInput.value
		);
		
		/* Clear the input fields after the submission. */
		nameInput.value   = "";
		authorInput.value = "";
		lengthInput.value = "";
		genreInput.value  = "";
		
		if (booksShown) {
			tip.textContent = "";
			populateShelves();
			bookshelves[bookshelves.length - 1].children[0].innerHTML =
				books[books.length - 1].desc();
			bookshelves[bookshelves.length - 1].append(books[books.length-1].read());

		}
	});
}

// Avoid duplication.
let addFormShown = false;
add.addEventListener("click", () => {
	if (!addFormShown) {
		addFormShown = true;
		populateAddFormSection();
		for (const item of addFormSection) {
			formSection.append(item);
		}
	}
	add.remove();
});