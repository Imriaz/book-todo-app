import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./BookToDo.css";

const BookToDo = () => {
  const [todos, setTodos] = useState([
    {
      text: "Welcome to To Book Do app, This is sample Book todo list what should you want to read today!",
    },
  ]);

  function Todo({ todo, index, removeTodo }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.text}
        </span>
        <div>
          <button variant="outline-danger" onClick={() => removeTodo(index)}>
            ✕
          </button>
        </div>
      </div>
    );
  }

  function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <b>Add Book Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new Book todo list"
        />
        <br />
        <Button className="submit__button" type="submit">
          Add To-Do
        </Button>
      </Form>
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container book__todo">
      <h1 className="text-center mb-4 book__todo__heading">Book Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <Todo
                key={index}
                index={index}
                todo={todo}
                removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookToDo;
