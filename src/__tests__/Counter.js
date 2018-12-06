import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Counter from "../components/Counter";

afterEach(() => {
  cleanup();
  window.localStorage.removeItem("count");
});

test("counter increments the counts", () => {
  const { container } = render(<Counter />);

  const button = container.firstChild;

  expect(button.textContent).toBe("Counter | 0");

  fireEvent.click(button);

  expect(button.textContent).toBe("Counter | 1");
});

test("reads and updates localStorage", () => {
  window.localStorage.setItem("count", 5);
  const { container, rerender } = render(<Counter />);
  const button = container.firstChild;

  expect(button.textContent).toBe("Counter | 5");

  fireEvent.click(button);

  expect(button.textContent).toBe("Counter | 6");

  rerender(<Counter />);
  expect(window.localStorage.getItem("count")).toBe("6");
});
