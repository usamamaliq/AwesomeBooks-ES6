export const displayBooks = document.querySelector('#display_list');
export const displayForm = document.querySelector('#display_form');
export const contact = document.querySelector('#contact');
export const displayContact = document.querySelector('#display_contact');

export const addBookList = document.querySelector('#form');

const bookItems = document.querySelector('#book-list');
const awesomeHeading = document.querySelector('#awesome');

export const showOnlyForm = () => {
  addBookList.style.display = 'flex';
  awesomeHeading.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'none';
};
export const showBooksOnly = () => {
  addBookList.style.display = 'none';
  contact.style.display = 'none';
  awesomeHeading.style.display = 'block';
  bookItems.style.display = 'flex';
};
export const showOnlyContact = () => {
  addBookList.style.display = 'none';
  awesomeHeading.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'flex';
};
