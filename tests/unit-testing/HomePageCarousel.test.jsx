import { render, fireEvent } from "@testing-library/react";
import HomePageCarousel from "../../src/components/HomePageCarousel";
import { BrowserRouter } from "react-router-dom";
describe("HomePageCarousel", () => {
  it("First Link to the shop works correctly", async () => {
    const { getByRole } = await render(
      <BrowserRouter>
        <HomePageCarousel imgNum={0} />
      </BrowserRouter>
    );
    const firstLink = getByRole("link", { name: "BARK & BROWSE" });
    fireEvent.click(firstLink);
    expect(window.location.pathname).toBe("/shop");
  });
  it("Second Link to the shop works correctly", async () => {
    const { getByRole } = await render(
      <BrowserRouter>
        <HomePageCarousel imgNum={1} />
      </BrowserRouter>
    );
    const secondLink = getByRole("link", { name: "SHOP" });
    fireEvent.click(secondLink);
    expect(window.location.pathname).toBe("/shop");
  });
  it("Second Link to the shop works correctly", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <HomePageCarousel imgNum={2} />
      </BrowserRouter>
    );
    const thirdLink = getByRole("link", { name: "EXPLORE" });
    fireEvent.click(thirdLink);
    expect(thirdLink).toHaveAttribute("href", "/shop");
  });
});
