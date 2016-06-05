function addPrice(price) {
  this.price = price;
}

function book(title, author) {
  this.title = title;
  this.author = author;
  // this.price
  this.addPrice = addPrice;
}

var book1 = new book("JS in action", "myx");
book1.addPrice(199);

console.log("title:" + book1.title);
console.log("author:" + book1.author);
console.log("price:" + book1.price);


JSON.stringify(book1);
console.log(book1);
