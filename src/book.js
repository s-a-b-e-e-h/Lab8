let users = {
  user1: {
    password: "passwd1",
    borrowedBooks: [
      "The art of being ALone",
      "The Psychology of Money",
      "The Twilight Series",
    ],
  },
  user2: {
    password: "passwd1",
    borrowedBooks: [
      "The art of being ALone",
      "The Psychology of Money",
      "The Twilight Series",
    ],
  },
};

let books = [
  {
    title: "The Art of being Alone",
    author: "Renuka Gavrani",
    borrower: "",
    Date: "",
    category: "Non Fiction",
  },
  {
    title: "The Psychology of Money",
    author: " XYZ",
    borrower: "",
    Date: "",
    category: "Fiction",
  },
];

function Lend_Book(title, borrower, date) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title == title) {
      books[i].borrower = borrower;
      books[i].Date = date;
      users[borrower].borrowedBooks.push(books[i]);
    }
  }
}

function View_Borrowed_Books(borrower) {
  for (let i = 0; i < users[borrower].borrowedBooks.length; i++) {
    console.log(users[borrower].borrowedBooks[i].title);
    console.log(users[borrower].borrowedBooks[i].author);
    console.log(users[borrower].borrowedBooks[i].borrower);
    console.log(users[borrower].borrowedBooks[i].Date);
    console.log(users[borrower].borrowedBooks[i].category);
  }
}

function User_Authentication(username, password) {
  if (users[username] && users[username].password === password) {
    console.log("Authentication successful");
    return true;
  } else {
    console.log("Authentication failed");
    return false;
  }
}

Lend_Book("The Art of being Alone", "user1", "2022-01-01");

View_Borrowed_Books("user1");

