const { default: Footer } = require("@/components/layouts/Footer");
const { default: Header } = require("@/components/layouts/Header");
const { default: OffCanvasMenu } = require("@/components/layouts/OffCanvasMenu");
const { default: FooterCta } = require("@/components/sections/FooterCta");


describe("MainLayout Home Component", () => {
  it("renders header component", () => {
    cy.mount(<Header/>);
    cy.get('[data-testid="main-header"]').should("be.visible");
  });
  it("renders footer cta component", () => {
    cy.mount(<FooterCta/>);
    cy.get('[data-testid="main-footercta"]').should("be.visible");
  });
  it("renders offcanvas menu component", () => {
    cy.mount(<OffCanvasMenu/>);
    cy.get('[data-testid="main-canvasmenu"]').should("be.visible");
  });
  it("renders footer component", () => {
    cy.mount(<Footer/>);
    cy.get('[data-testid="main-footer"]').should("be.visible");
  });
  
});

describe("<Header/>", () => {
  it("mounts header", () => {
    cy.mount(<Header/>);
  });
});

describe("<FooterCta/>", () => {
  it("mounts footer cta", () => {
    cy.mount(<FooterCta />);
  });
});
describe("<OffCanvasMenu/>", () => {
  it("mounts offcanvas menu", () => {
    cy.mount(<OffCanvasMenu />);
  });
});
describe("<Footer/>", () => {
  it("mounts footer", () => {
    cy.mount(<Footer/>);
  });
});