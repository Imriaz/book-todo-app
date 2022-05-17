import logo from "./logo.svg";
import "./App.css";
import BookToDo from "./Components/BookToDo/BlogToDo";
import BookLibrary from "./Components/BookLibrary/BookLibrary";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <BookToDo />
      {/* <BookLibrary /> */}
      <Blogs />
    </div>
  );
}

export default App;
