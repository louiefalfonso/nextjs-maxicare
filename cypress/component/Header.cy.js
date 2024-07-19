import Header from "@/components/layouts/Header";
import Navigation from "@/components/layouts/Navigation";

describe("Header Component", () => {
    beforeEach(() => {
      cy.viewport(1024, 1366);
    });

  it("renders Header", () => {
    cy.mount(<Header/>);
    cy.get('[data-testid="main-header"]').find("div").should("be.visible");
    cy.get('[data-testid="main-header"]').find(".header__area").should("be.visible");
    cy.get('[data-testid="main-header"]').find(".container")
      .should("be.visible")
      .and("have.attr", "class")
      .and("contain", "container")
      .and("not.be.empty");

    cy.get('[data-testid="main-header"]').find(".header__main").should("be.visible");
    cy.get('[data-testid="main-header"]').find(".header__main")
      .find(".header__logo")
      .should("be.visible")
      .and("have.attr", "class")
      .and("contain", "header__logo")
      .and("not.be.empty");
    
      cy.get('[data-testid="main-header"]').find(".header__logo").should("be.visible");
      cy.get('[data-testid="main-header"]').find(".header__logo")
      .find("a")
      .should("be.visible")
      .and("have.attr", "href")
      .and("not.be.empty");

      cy.get('[data-testid="main-header"]').find(".header__right").should("be.visible");
      cy.get('[data-testid="main-header"]').find(".header__right")
      .find(".header__action")
      .should("be.visible")
      .and("have.attr", "class")
      .and("contain", "header__action")
      .and("not.be.empty");

      cy.get('[data-testid="main-header"]').find(".header__btn-wrap").should("be.visible");
      cy.get('[data-testid="main-header"]').find(".header__btn-wrap")
      .find("a")
      .should("be.visible")
      .and("have.attr", "href")
      .and("not.be.empty");

      cy.get('[data-testid="main-header"]').find("span").should("be.visible");
      cy.get('[data-testid="main-header"]').find("span")
      .find("i")
      .and("have.attr", "class")
      .and("contain", "fa-solid")
      .and("contain", "fa-plus")
      .and("not.be.empty");

  });


  it("renders Navigation", () => {
    cy.mount(<Navigation/>);
    cy.get('[data-testid="main-nav"]').find("div").should("be.visible");
    cy.get('[data-testid="main-nav"]').find(".main-menu")
      .should("be.visible")
      .and("have.attr", "class")
      .and("contain", "main-menu")
      .and("not.be.empty");
    
      cy.get('[data-testid="main-nav"]').find(".main-menu")
      .find("ul", "li")
      .should("be.visible")
      .and("not.be.empty");

      cy.get('[data-testid="main-nav"]').find(".main-menu")
      .find("ul", "li")
      .find("a")
      .should("be.visible")
      .and("have.attr", "href")
      .and("not.be.empty");
  });
});
