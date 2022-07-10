/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */

/* Buttons */
const buttons = document.querySelectorAll( "button" ),
	add     = buttons[0],
	show    = buttons[1],
	/*
	 *Sections
	 */
	sections     = document.querySelectorAll( "section" ),
	booksSection = sections[1],
	formSection  = sections[2],
	/*
	 *Divs
	 */
	divs    = document.querySelectorAll( "div" ),
	shelves = divs[0],
	/*
	 *Main books array
	 */
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
class Book
{
	constructor( name, author, length, genre )
	{
		this.name   = name;
		this.author = author;
		this.length = length;
		this.genre  = genre;
	}
	desc()
	{
		return `Name: "${ this.name }"<br>
		Author: ${ this.author }<br>
		Length: ${ this.length }<br>
		Genre : ${ this.genre }<br>`;
	}
	read()
	{
		const readButton = document.createElement( "button" ),
			readIcon = document.createElement( "span" );
		let readStatus   = false;

		readButton.append( readIcon );
		readIcon.setAttribute( "class", "iconify" );
		readIcon.dataset.icon = "gg:read";
		readButton.addEventListener( "click", () =>
		{
			if ( readStatus )
			{
				readIcon.dataset.icon            = "gg:read";
				readButton.style.backgroundColor = "green";
				readStatus                       = false;

				return;
			}
			readIcon.dataset.icon            = "gg:read-solid";
			readButton.style.backgroundColor = "red";
			readStatus                       = true;
		} );

		return readButton;
	}
}
// Some examples of books
const _sample1 = new Book( "Ulysses", "James Joyce", 661, "Modernist novel" ),
	_sample2 = new Book( "Dune", "Frank Herbert", 412, "Science fiction" ),
	bookshelves = [];

books.push( _sample1, _sample2 );
/**
 * Populate the books section with shelves and their contents.
 */
function populateShelves()
{
	const shelf = document.createElement( "article" ),
		desc = document.createElement( "p" ),
		removeButton = document.createElement( "button" ),
		removeIcon = document.createElement( "span" );

	shelves.append( shelf );
	shelf.className = "shelf";
	// Text part
	shelf.append( desc, removeButton );
	// Remove button
	removeButton.append( removeIcon );
	removeIcon.setAttribute( "class", "iconify" );
	removeIcon.dataset.icon = "ic:round-playlist-remove";
	removeButton.addEventListener( "click", ( event ) =>
	{
		event.target.parentNode.remove();
		/* Remove the book from the books array and the shelf from the shelves array */
		books.splice( bookshelves.indexOf( event.target.parentNode ), 1 );
		bookshelves.splice( bookshelves.indexOf( event.target.parentNode ), 1 );
	} );
	bookshelves.push( shelf );
}
const tip      = document.createElement( "p" );
let booksShown = false;

tip.textContent = "Tip: use TABS to navigate between input fields.";
/*
 * The show button. Loop through the books array and add the
 * book description to the bookshelves array.
 */
show.addEventListener( "click", () =>
{
	const intro = document.createElement( "h2" );

	booksSection.style.setProperty( "--bg-opacity", "0.2" );
	tip.textContent   = "";
	intro.textContent = "We currently have:";
	booksSection.prepend( intro );
	for ( const [index, book] of books.entries() )
	{
		populateShelves();
		bookshelves[index].children[0].innerHTML = book.desc();
		bookshelves[index].append( book.read() );

	}
	booksShown = true;
	show.remove();
} );
/* An array that will hold the elements of the add form. */
const addFormSection = [];

/**
 * It creates a form section for adding books to the bookshelves.
 */
function populateAddFormSection()
{
	tip.setAttribute( "style", "opacity:0.5" );
	formSection.append( tip );
	// Title
	const nameLabel = document.createElement( "label" ),
		nameInput = document.createElement( "input" );

	nameLabel.textContent = "Book title:";
	nameInput.name        = "name";
	nameInput.placeholder = "Sherlock Holmes";
	nameInput.required    = true;
	nameLabel.append( nameInput );
	addFormSection.push( nameLabel );
	// Author
	const authorLabel = document.createElement( "label" ),
		authorInput = document.createElement( "input" );

	authorLabel.textContent = "Author:";
	authorInput.name        = "author";
	authorInput.placeholder = "Dostoevsky";
	authorInput.required    = true;
	authorLabel.append( authorInput );
	addFormSection.push( authorLabel );
	// Length
	const lengthLabel = document.createElement( "label" ),
		lengthInput = document.createElement( "input" );

	lengthLabel.textContent = "Pages:";
	lengthInput.name        = "length";
	lengthInput.placeholder = "100";
	lengthInput.required    = true;
	lengthLabel.append( lengthInput );
	addFormSection.push( lengthLabel );
	// Genre
	const genreLabel = document.createElement( "label" ),
		genreInput = document.createElement( "input" );

	genreLabel.textContent = "Genre:";
	genreInput.name        = "genre";
	genreInput.placeholder = "Literary fiction";
	genreInput.required    = true;
	genreLabel.append( genreInput );
	addFormSection.push( genreLabel );
	// Submit
	const submitButton = document.createElement( "button" );

	submitButton.textContent = "Add";
	// SubmitButton.type        = "reset";
	addFormSection.push( submitButton );
	submitButton.addEventListener( "click", () =>
	{
		nameInput.focus();
		/* Display tip if the input fields are empty. */
		if ( nameInput.value === ""
			|| authorInput.value === ""
			|| lengthInput.value === ""
			|| genreInput.value === "" )
		{
			tip.textContent = "Please fill out the fields.";

			return;
		}
		/* Check if the books shown. If they haven't, display a tip. */
		if ( !booksShown )
		{
			tip.setAttribute( "style", "opacity:1" );
			tip.textContent
				= "The new books will be shown when you click ";
			tip.append( show );
		}
		/* Create a new book object and then add it to the bookshelves array. */
		const _newBook = new Book(
			nameInput.value,
			authorInput.value,
			lengthInput.value,
			genreInput.value
		);

		books.push( _newBook );
		/* Clear the input fields after the submission. */
		nameInput.value   = "";
		authorInput.value = "";
		lengthInput.value = "";
		genreInput.value  = "";
		if ( booksShown )
		{
			tip.textContent = "";
			populateShelves();
			bookshelves[bookshelves.length - 1].children[0].innerHTML
				= books[books.length - 1].desc();
			bookshelves[bookshelves.length - 1].append( books[books.length - 1].read() );
		}
	} );
}
// Don't show the new books yet.
let addFormShown = false;

add.addEventListener( "click", () =>
{
	if ( !addFormShown )
	{
		addFormShown = true;
		populateAddFormSection();
		for ( const item of addFormSection )
		{
			formSection.append( item );
		}
	}
	add.remove();
	addFormSection[0].children[0].focus();
} );