

let books = http://JSON.parse(localStorage.getItem("books")) || [];

function addBook() {
let name = http://document.getElementById("bookName").value;
let author = http://document.getElementById("authorName").value;
let id = http://document.getElementById("bookId").value;
if (name === "" || author === "" || id === "") { alert("Please fill all fields"); return; }
http://books.push({ id: id, name: name, author: author, status: "Available" });
http://localStorage.setItem("books", http://JSON.stringify(books));
http://document.getElementById("bookName").value = "";
http://document.getElementById("authorName").value = "";
http://document.getElementById("bookId").value = "";
showBooks();
}

function showBooks() {
let list = http://document.getElementById("bookList");
http://list.innerHTML = "";
http://books.forEach(function(book, index) {
http://list.innerHTML += "<tr><td>" + http://book.id + "</td><td>" + http://book.name + "</td><td>" + http://book.author + "</td><td>" + http://book.status + "</td><td><button class='issue-btn' onclick='issueBook(" + index + ")'>Issue</button><button class='delete-btn' onclick='deleteBook(" + index + ")'>Delete</button></td></tr>";
});
}

function issueBook(index) {
books[index].status = books[index].status === "Available" ? "Issued" : "Available";
http://localStorage.setItem("books", http://JSON.stringify(books));
showBooks();
}

function deleteBook(index) {
http://books.splice(index, 1);
http://localStorage.setItem("books", http://JSON.stringify(books));
showBooks();
}

function searchBook() {
let value = http://document.getElementById("search").value.toLowerCase();
let rows = http://document.getElementById("bookList").getElementsByTagName("tr");
for (let i = 0; i < http://rows.length; i++) {
let text = rows[i].innerText.toLowerCase();
rows[i].style.display = http://text.includes(value) ? "" : "none";
}
