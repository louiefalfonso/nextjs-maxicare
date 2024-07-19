const { default: BannerArea } = require("@/components/sections/BannerArea");
const { default: ServiceArea } = require("@/components/sections/ServiceArea");
const { default: WhyChooseUs } = require("@/components/sections/WhyChooseUs");

describe("Home Page", () => {
  it("renders Banner Area Component and displays all images, headings, paragraph and pagination", () => {
    cy.mount(<BannerArea/>);
    cy.get('[data-testid="bannerarea"]').should("be.visible");
    cy.get('[data-testid="bannerarea"]')
      .find(".banner-3__item-media")
      .each(($img) => {
        cy.wrap($img)
          .find("img")
          .should("be.visible")
          .and("have.attr", "src")
          .and("not.be.empty");
      });
    
    cy.get('[data-testid="bannerarea"]')
      .find("h1")
      .should("be.visible")
      .and("contain.text", "Epicenter of Health Your Wellness Haven");

    cy.get('[data-testid="bannerarea"]')
      .find("p")
      .should("be.visible");
    
    cy.get('[data-testid="bannerarea"]')
      .find(".swiper-slide")
      .should("have.length", 3)
      .and("be.visible");   
      
  });
  
  it("renders Service Area Component and displays all images, headings, paragraph and pagination", () => {
    cy.mount(<ServiceArea/>);
    cy.get('[data-testid="servicearea"]').should("be.visible");
    cy.get('[data-testid="servicearea"]').find(".service-2__item")
      .each(($img) => {
        cy.wrap($img)
          .find("img")
          .should("be.visible")
          .and("have.attr", "src")
          .and("not.be.empty");
      });
    cy.get('[data-testid="servicearea"]').find("h2", "h4").should("be.visible");
    cy.get('[data-testid="servicearea"]').find("a", "h5").should("be.visible");
    cy.get('[data-testid="servicearea"]').find("ul", "li").should("be.visible");
    
    
  });

  it("renders Why Choose Us Component and displays all images, headings, paragraph and pagination", () => {
    cy.mount(<WhyChooseUs/>);
    cy.get('[data-testid="whychooseus"]').should("be.visible");
    cy.get('[data-testid="whychooseus"]')
      .find(".why-choose-us")
      .each(($img) => {
        cy.wrap($img)
          .find("img")
          .should("be.visible")
          .and("have.attr", "src")
          .and("not.be.empty");
      });

    cy.get('[data-testid="whychooseus"]').find("h2").should("be.visible").and("contain.text", "Embrace Wellness Your Gateway");
    cy.get('[data-testid="whychooseus"]').find("ul", "li").should("be.visible");

  });



})
