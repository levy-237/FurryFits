import { fireEvent, render } from "@testing-library/react";
import BurgerMenu from "../../src/layout/BurgerMenu";
import { BrowserRouter } from "react-router-dom";

describe("responsive burger menu works", () => {
  const renderBurger = () => {
    return render(
      <BrowserRouter>
        <BurgerMenu></BurgerMenu>
      </BrowserRouter>
    );
  };
  it("link to home works", async () => {
    const { getByText } = renderBurger();
    global.innerWidth = 400;

    const linkElement = getByText(/HOME/);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/");
  });
  it("link to shop works", async () => {
    const { getByText } = renderBurger();
    global.innerWidth = 400;

    const linkElement = getByText(/SHOP/);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/shop");
  });
  it("link to about works", async () => {
    const { getByText } = renderBurger();
    global.innerWidth = 400;

    const linkElement = getByText(/FAQ/);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe("/FAQ");
  });
});
