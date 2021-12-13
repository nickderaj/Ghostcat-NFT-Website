import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test("on initial render, the nav button is enabled", async () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(await screen.findByRole(/navbtn/i)).toBeEnabled();
});
