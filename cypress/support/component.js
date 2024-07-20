// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'

import "@/public/css/main.css";
import "@/public/css/vendor/bootstrap.min.css";
import "@/public/css/vendor/animate.min.css";
import "@/public/css/plugins/swiper.min.css";
import "@/public/css/vendor/magnific-popup.css";
import "@/public/css/vendor/fontawesome-pro.css";
import "@/public/css/vendor/spacing.css";
import "@/public/css/plugins/odometer-theme-default.css";


Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)