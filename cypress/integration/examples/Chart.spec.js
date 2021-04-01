import { extractLabels } from "../../../src/utils";

const labels = extractLabels();

describe("Chart has data can be checked", () => {
  it("can check checkboxes", () => {
    cy.visit("localhost:3000");
    // should have bar chart
    cy.get("canvas.chartjs-render-monitor").should("exist");
    // check if checkbox exists with label
    cy.get(`input[name=${labels[0]}]`).should("exist");
    cy.get("span")
      .contains(`${labels[0]}`)
      .should("exist");
    // check checkbox
    cy.get(`input[name=${labels[0]}]`).check();
    cy.get(`input[name=${labels[0]}]`).should("be.checked");
    // check if chart and data matches
    cy.get("body").toMatchImageSnapshot();
  });
});
