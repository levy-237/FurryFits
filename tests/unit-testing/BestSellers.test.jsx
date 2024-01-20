import { render, fireEvent } from "@testing-library/react";
import BestSellers from "../../src/components/BestSellers";
import { BrowserRouter } from "react-router-dom";

describe("BestSellers", () => {
  it("bestSellers component link works", async () => {
    const { getAllByRole } = await render(
      <BrowserRouter>
        <BestSellers />
      </BrowserRouter>
    );
    const linkComponent = await getAllByRole("img");
    fireEvent.click(linkComponent);
    expect(window.location.pathname).toBe("/shop/:id");
  });
});
