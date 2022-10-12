import { displayBooksControl, removeBook, addBook } from './modules/display.js';
import {
  displayBooks, displayForm, contact, displayContact,
  showBooksOnly, showOnlyContact, showOnlyForm,
} from './modules/dynamic.js';

import { DateTime } from './modules/luxon.js';

const bookItems = document.querySelector('#book-list');
const awesomeHeading = document.querySelector('#awesome');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// display  all the books
window.onload = displayBooksControl.displayBooks();

// add books by inputting into form

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // validating form fields
  if (title === '' || author === '') {
    alert('You must fill in all fields');
  } else {
    const book = new Book(title, author);
    awesomeHeading.style.display = 'block';
    bookItems.style.display = 'flex';

    // adding book to the list
    displayBooksControl.addBookToList(book);
    // adding book to the local storage

    addBook(book);
    // clear all the fields
    displayBooksControl.clearFields();
  }
});
// remove the book
document.querySelector('#book-list').addEventListener('click', (e) => {
  displayBooksControl.deleteBook(e.target);

  // remove from displayBooksControl
  removeBook(e.target.parentElement.innerHTML);
});

// creating date section using luxon
const displayDate = document.querySelector('.date');

displayDate.innerHTML = `${DateTime.local().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`;

contact.innerHTML = `<h2>
    Contact information
    </h2>
    <p> Do you have any questions or you just want to say "Hello"
      <br>You can reach out to us!
      </p>
    <ul>
      <li>Our email:mail@mail.com</li>
      <li>Our Phone number:001234567891232</li>
      <li>Our address:Streetname 22,88273 city, country </li>
    </ul>`;

displayBooks.addEventListener('click', showBooksOnly);

displayForm.addEventListener('click', showOnlyForm);

displayContact.addEventListener('click', showOnlyContact);
