import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("Renders Without Crashing", function() {
  render(<Todo />);
});

it("Matches the Snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("Updates the Task", function() {
  const updateMock = jest.fn();
  const { getByText } = render(<Todo update={updateMock} />);
  const editButton = getByText("Edit");
  fireEvent.click(editButton);
  const updateButton = getByText("Update");
  fireEvent.click(updateButton);
  expect(updateMock).toHaveBeenCalled();
});

it("Deletes the Task", function() {
  const removeMock = jest.fn();
  const { getByText } = render(<Todo remove={removeMock} />);
  const deleteButton = getByText("Delete");
  fireEvent.click(deleteButton);
  expect(removeMock).toHaveBeenCalled();
});
