import {
  Lend_Book,
  User_Authentication,
  View_Borrowed_Books,
} from "./src/book.js";

Lend_Book("Good Habbits", "FGH", "2025,3 18");
View_Borrowed_Books("user1");

User_Authentication("user1", "password1");
