import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("Renders Without Crashing", function() {
  render(<NewTodoForm />);
});

it("Matches the Snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("Adds the New Task When Submitted", function() {
  const createMock = jest.fn();
  const { getByText } = render(<NewTodoForm addTodo={createMock} />);
  const createButton = getByText("Add Task");
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});