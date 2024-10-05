// Use Quokka.js to run on the script to inspect variable output.

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// De-structuring
const book = getBook(3);

// const title = book.title;
// const author = book.author;

// You need to use the exact property names
// from book to get the variables populated.
// This is JavaScript. Same as what you can
// do as above. This is called de-structuring.
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Similarly doing it using Array based de-strucring
// When you do ...otherGenres it will extract everything else to
// a variable called otherGenres. This should be at the end always.
// This is called rest operator.
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread
// Spread operator is same as rest operator. Here it will
// take all the values of geners and place one by one with
// "epic fantacy" creating a new array. Here the spread operator
// ...genres should be the first argument or the last.
// const newGenres = ["epic fantacy", ...genres];
const newGenres = [...genres, "epic fantacy"];
console.log(newGenres);

// Spread Operator on objects. You can also override the existing object properties.
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overrding an existing property
  pages: 1210,
};
console.log(updatedBook);

// Template literals. ES-6 Javascript feature. Should use `` (Back ticks)
const summary = `${title}, a ${pages} page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adopted aas a movie`;
console.log(summary);

// Ternary operator instead of if/else
const pagesRange = pages > 1000 ? "over a 1000" : "less that 1000";
console.log(`The book has ${pagesRange} pages`);

// Arrow Functions
// Quick one liner functions. Can be used for all functions but is a bad practice.
// Here the getYear is a function and publicationDate is the argument
//
// Same as
// function getYear(str) {
//  return publicationDate.split("-")[0];
// }
const getYear = (publicationDate) => publicationDate.split("-")[0];
console.log(getYear(publicationDate));

// Short circuiting and logical oerators: &&, ||, ??
// If &&, first value is false, it will immidetly short circuit.
// Or is exactly the opposite.
// ?? exactly the same as || but will only short circuit if the value of null or undefined.
// With ||, if the value is 0, it will falsify.
console.log(true && "Some string");
console.log(false && "Some string");

// Optional Chaining. If something before ? does not exist, it will no throw error.
function getTotalReviewCount(book) {
  // If
  const goodRead = book.reviews.goodreads?.reviewsCount ?? 0;
  const libraryAnything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodRead + libraryAnything;
}

const totalReviewCount = getTotalReviewCount(book);
console.log(totalReviewCount);

// Array Map
// Does not change the original Array

// Example 1
const x = [1, 2, 3, 4, 5, 6].map((element) => element * 2);
console.log(x);

// Example 2
const books = getBooks();
const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// Example 3
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialData);

// Array Filter
// Again does not change the original array. You can chain like in Java.
const booksHasMoreThanPages = books.filter((book) => book.pages >= 500);
console.log(booksHasMoreThanPages);

// Array Reduce
// Again does not change the original array
// first argument is accumilator where it get reduced to
// second argument is the array where we provide the function to reduce
// and the initial value for the accumilator.
const totalPagesOfAllBooks = books.reduce(
  (accumilator, book) => accumilator + book.pages,
  0
);
console.log(totalPagesOfAllBooks);

// Array Sort
// This changes the original array/mutates
// Example 1
const sortArrayExample = [3, 7, 1, 9, 6];
// a is the first value and b is second value and it takes as pairs.
// so 3 - 7 = -4, 7 - 1 = 6 etc. So it will sort from smallest to highest(Ascending)
const sortedArrayAsc = sortArrayExample.sort((a, b) => a - b);
console.log(sortedArrayAsc);
console.log(sortArrayExample);

const sortedArrayDsc = sortArrayExample.sort((a, b) => b - a);
console.log(sortedArrayDsc);
console.log(sortArrayExample);

// To work around mutation.
const copyArray = sortArrayExample.slice();
const sortedArrayImmuteAsc = copyArray.sort((a, b) => a - b);
console.log(sortedArrayImmuteAsc);
console.log(sortArrayExample);

// Example 2
const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedByPages);

// Immutable Arrays.
// Example 1 : Add elements immutably (Add book object)
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Example 2: Delete a book
const boolsAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(boolsAfterDelete);

// Example 3: Update
const booksAfterUpdate = boolsAfterDelete.map((book) =>
  // Spread and update the object pages if id is 1 or return the book as is.
  book.id === 1 ? { ...book, pages: 1230 } : book
);
console.log(booksAfterUpdate);

// ===================
// Javascript Promises.
// ===================
// https://jsonplaceholder.typicode.com/ for dumy endpoint.
// Fetch is only added to node from node version 18. Fetch is aync and returns a promise.
// Then will act upon completion
fetch("https://jsonplaceholder.typicode.com/todos/10")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Async/Await
async function getToDos() {
  // Here JS will not move to the next line and will wait until response.
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  const data = await res.json();
  console.log(data);
}

getToDos();
