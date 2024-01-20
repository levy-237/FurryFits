import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FAQ from "../../src/pages/FAQ";

describe("FAQ page works", () => {
  it("GENERAL QUERIES hashLink works", async () => {
    const { getByRole } = await render(
      <BrowserRouter>
        <FAQ />
      </BrowserRouter>
    );
    const firstLink = getByRole("link", { name: "GENERAL QUERIES" });
    fireEvent.click(firstLink);
    expect(window.location.href).toBe("http://localhost:3000/#GENERAL_QUERIES");
  });
  it("SIZE AND FITS hashLink works", async () => {
    const { getByRole } = await render(
      <BrowserRouter>
        <FAQ />
      </BrowserRouter>
    );
    const secondLink = getByRole("link", { name: "SIZE AND FIT" });
    fireEvent.click(secondLink);
    expect(window.location.href).toBe("http://localhost:3000/#SIZE_AND_FIT");
  });
  it("SHIPPING AND RETURNS hashLink works", async () => {
    const { getByRole } = await render(
      <BrowserRouter>
        <FAQ />
      </BrowserRouter>
    );
    const thirdLink = getByRole("link", { name: "SHIPPING AND RETURNS" });
    fireEvent.click(thirdLink);
    expect(window.location.href).toBe(
      "http://localhost:3000/#SHIPPING_&_RETURNS"
    );
  });
  //   it("answers appear after clicking questoins", async () => {
  //     const { getByTestId } = await render(
  //       <BrowserRouter>
  //         <FAQ />
  //       </BrowserRouter>
  //     );
  //     const question = getByTestId("FAQquestions");
  //     fireEvent.click(question);
  //     const answers = getByTestId("FAQanswers");
  //   });
});
