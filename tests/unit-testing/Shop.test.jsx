import { render, fireEvent } from "@testing-library/react";
import Shop from "../../src/pages/Shop";
import { BrowserRouter } from "react-router-dom";
describe("Shop page", () => {
  const renderShopPage = () => {
    return render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
  };
  it("filtering products ascending", () => {
    const { getAllByRole } = renderShopPage();
    const filteringLink = getAllByRole("link");
    const ascendingButton = filteringLink[0];
    fireEvent.click(ascendingButton);
    expect(window.location.href).toBe("http://localhost:3000/?price=up");
  });
  it("filtering products descending", () => {
    const { getAllByRole } = renderShopPage();
    const filteringLink = getAllByRole("link");
    const descendingButton = filteringLink[1];
    fireEvent.click(descendingButton);
    expect(window.location.href).toBe("http://localhost:3000/?price=down");
  });
  it("resetting products filter", () => {
    const { getAllByRole } = renderShopPage();
    const filteringLink = getAllByRole("link");
    const resetButton = filteringLink[2];
    fireEvent.click(resetButton);
    expect(window.location.href).toBe("http://localhost:3000/");
  });
});
// it("link to product", () => {
//   const { queryByTestId } = render(
//     <BrowserRouter>
//       <Shop />
//     </BrowserRouter>
//   );
//   const ProductLink = queryByTestId("shop-image");
//   fireEvent.click(ProductLink);
//   expect(window.location.href).toBe(
//     "http://localhost:3000/shop/seeWEftJa2DZLKPNgrL2"
//   );
// });
