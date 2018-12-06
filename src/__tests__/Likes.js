import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import Likes from "../components/Likes";

afterEach(() => cleanup());

test("<Likes /> increment and decrement likes count", () => {
  const { getByTestId } = render(<Likes />);
  const btnLikes = getByTestId("btn-likes");

  expect(btnLikes.textContent).toBe("🖤 200");

  fireEvent.click(btnLikes);
  expect(btnLikes.textContent).toBe("❤️ 201");

  fireEvent.click(btnLikes);
  expect(btnLikes.textContent).toBe("🖤 200");
});

test("<Likes /> 2 times click btnLikes value must be on initial value", () => {
  const { getByTestId } = render(<Likes />);
  const btnLikes = getByTestId("btn-likes");

  fireEvent.click(btnLikes);
  fireEvent.click(btnLikes);

  expect(btnLikes.textContent).toBe("🖤 200");
});

test("<Likes /> 3 times click btnLikes value must be increment 1", () => {
  const { getByTestId } = render(<Likes />);
  const btnLikes = getByTestId("btn-likes");

  fireEvent.click(btnLikes);
  fireEvent.click(btnLikes);
  fireEvent.click(btnLikes);

  expect(btnLikes.textContent).toBe("❤️ 201");
});
