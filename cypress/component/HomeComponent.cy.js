import MainLayout from "@/components/layouts/MainLayout";
import Header from "@/components/layouts/Header";
import FooterCta from "@/components/sections/FooterCta";
import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/ScrollToTop";

describe("MainLayout Home Component", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("renders Main Layout", () => {
    cy.mount(<MainLayout />);
    cy.get('[data-testid="main-layout"]').should("be.visible");
  });

  it("renders Header", () => {
    cy.mount(<Header />);
    cy.get('[data-testid="main-header"]').find("div").should("be.visible");
  });


  it("renders Off Canvas Menu", () => {
    cy.mount(<FooterCta/>);
    cy.get('[data-testid="main-footercta"]').find("div").should("be.visible");
  });

  it("renders Scroll to Top", () => {
    cy.mount(<ScrollToTop/>);
    cy.get('[data-testid="scroll-top"]').find("div").should("be.hidden");
    
  });

  it("renders Footer", () => {
    cy.mount(<Footer/>);
    cy.get('[data-testid="main-footer"]').find("div").should("be.visible");
  });


});
