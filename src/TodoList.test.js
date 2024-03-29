import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "write tests") {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("Add Task");
  fireEvent.click(submitButton);
}

it("Renders Without Crashing", function() {
  render(<TodoList />);
});

it("Matches the Snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("Adds a Task", function() {
  const list = render(<TodoList />);
  addTodo(list);

  expect(list.getByLabelText("Task:")).toHaveValue("");
  expect(list.getByText("write tests")).toBeInTheDocument();
  expect(list.getByText("Edit")).toBeInTheDocument();
  expect(list.getByText("Delete")).toBeInTheDocument();
});

it("Deletes a Task", function() {
  const list = render(<TodoList />);
  addTodo(list);

  fireEvent.click(list.getByText("Delete"));
  expect(list.queryByText("write tests")).not.toBeInTheDocument();
});
