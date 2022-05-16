import React, { useEffect, useState } from "react";
import "./BookLibrary.css";

const BookLibrary = () => {

  const [searchText, setSearchText] = useState();

  //Fetch the API
  // const url = `https://openlibrary.org/search.json?q=${searchText}`;
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      setSearchText(value);
      setSearchText("");
    };

  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("search-btn");
  const bookContainer = document.getElementById("book-container");
  const resultCount = document.getElementById("result-count");
  const errorDiv = document.getElementById("error");

  //Search Button Click event handler
  searchBtn.addEventListener("click", function () {
    const searchText = searchInput.value;
    // if Search field is empty
    if (searchText === "") {
      errorDiv.innerHTML = `<h3 class="bg-white">Search field cannot be empty.</h3>`;
      resultCount.innerHTML = "";
      bookContainer.innerHTML = "";
      return;
    }

    //Clear the Search field
    bookContainer.innerHTML = "";
    resultCount.innerHTML = "";
    searchInput.value = "";
    errorDiv.innerHTML = "";

  //Show Data Function
  const showData = (data) => {
    if (Object.keys(data).length === 0) {
      const errordiv = document.createElement("div");
      errordiv.innerHTML = `<h6 class="bg-white"><br>NO Result Found<br></h6>`;
      errorDiv.appendChild(errordiv);
    } else {
      errorDiv.innerText = ""; //clear error div
    }

    data.forEach((book) => {
      const div = document.createElement("div");

      div.classList.add("col");

      div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${
              book.cover_i
            }-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${
                      book.author_name ? book.author_name : ""
                    }</p>
                    <p class="card-text">${
                      book.first_publish_year ? book.first_publish_year : ""
                    }</p>
                </div>
            </div>
        `;
      bookContainer.appendChild(div);
    });

    // Total Search Result count
    const divResultCount = document.createElement("div");
    divResultCount.innerHTML = `<h6 class="bg-white">About ${
      Object.keys(data).length
    } results fuond</h6>`;
    resultCount.appendChild(divResultCount);
  };

  return (
    <div className="container book__library">
      <h1>Welcome to Book Library</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <b>Search A Book</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Book Name"
        />
        <br />
        <Button className="submit__button" type="submit">
          Search
        </Button>
      </Form>
      {/* <h1 class="text-center"><span class="bg-white">Book Archive</span></h1> */}
      <div class="input-group mb-3 w-75 mx-auto">
        <input
          id="searchInput"
          type="text"
          class="form-control"
          placeholder="Enter the Book name"
          aria-label="book-name"
          aria-describedby="button-addon2"
        />
        <button
          id="search-btn"
          class="btn btn-outline-info bg-info text-white"
          type="button"
        >
          Search
        </button>
      </div>

      <div id="result-count" class="mb-2"></div>

      <div id="book-container" class="row row-cols-1 row-cols-md-3 g-4"></div>

      <div id="error" class="mb-2"></div>

      <div></div>
    </div>
  );
};

export default BookLibrary;
