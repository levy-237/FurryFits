import { fireEvent, render } from "@testing-library/react";
import Product from "../../src/pages/Product";
import Bag from "../../src/layout/Bag";
import { BrowserRouter } from "react-router-dom";

describe("products get added to cart", () => {
  it("products get added to cart", () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Product />
        <Bag />
      </BrowserRouter>
    );
    const addToBag = getByText(/ADD TO BAG/);
    fireEvent.click(addToBag);
    const product = getByTestId("removeButton");
    expect(product).toBeInTheDocument();
  });
});
