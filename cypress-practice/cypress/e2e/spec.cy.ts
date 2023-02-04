describe("Home Page test", () => {
  it("Clicks on the home page link", () => {
    cy.visit("http://localhost:3000/");
    
    cy.get("a").click();
    cy.get("span").should("have.text", "0")
  })
})