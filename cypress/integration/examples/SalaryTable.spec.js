import {
  extractSalaries,
  extractLabels,
  formatAmount,
} from "../../../src/utils";

const salaries = extractSalaries();
const totalObj = salaries.find((obj) => obj.location === "Total");

describe("Salary table works", () => {
  it("has correct table data", () => {
    cy.visit("localhost:3000");
    // go to charts page
    cy.get("span")
      .contains("Table")
      .click();
    // check table headers exist
    cy.get("th")
      .contains("Delta")
      .should("exist");
    // check table location total exists
    cy.get("td")
      .contains(`${totalObj.location}`)
      .should("exist");
    // check table salary total exists
    cy.get("td")
      .contains(`${formatAmount(totalObj.salary)}`)
      .should("exist");
    // check table delta total exists
    cy.get("td")
      .contains(`${totalObj.delta}`)
      .should("exist");
  });

  // should ensure that salaries.length > 3
  it("can check checkboxes", () => {
    cy.visit("localhost:3000");
    // go to charts page
    cy.get("span")
      .contains("Table")
      .click();
    // check if checkbox exists with label
    cy.get(`input[name=${salaries[0].location}]`).should("exist");
    cy.get("span")
      .contains(`${salaries[0].location}`)
      .should("exist");
    // check checkbox
    cy.get(`input[name=${salaries[0].location}]`).check();
    cy.get(`input[name=${salaries[0].location}]`).should("be.checked");
    // check another checkbox
    cy.get(`input[name=${salaries[1].location}]`).check();
    cy.get(`input[name=${salaries[1].location}]`).should("be.checked");
    cy.get(`input[name=${salaries[2].location}]`).should("not.be.checked");
    // check if values exists and are filtered
    cy.get("td")
      .contains(`${salaries[1].location}`)
      .should("exist");
    cy.get("td")
      .contains(`${formatAmount(salaries[0].salary)}`)
      .should("exist");
    cy.get("td")
      .contains(`${salaries[1].delta}`)
      .should("exist");
    // check other values don't exist (total)
    cy.get("td")
      .contains(`${totalObj.location}`)
      .should("not.exist");
    // check table salary total exists
    cy.get("td")
      .contains(`${formatAmount(totalObj.salary)}`)
      .should("not.exist");
  });
});
