import 'cypress-real-events/support';
import { faker } from '@faker-js/faker'
import { navigationPage } from '../support/page-objects/navigationPage.js'
import { howItWorksPage } from '../support/page-objects/howItWorksPage.js'
import { roiCalculatorPage } from '../support/page-objects/roiCalculatorPage.js'
import { contactUsPage } from '../support/page-objects/contactUsPage.js'

let firstName, lastName, email


describe('XOi website smoke tests', () => {

  beforeEach(() => {
    cy.visit('/')
    firstName = faker.person.firstName()
    lastName = faker.person.lastName()
    email = faker.internet.email()
  })

  it('#T1 Click on each navigation item and verify each page is loaded successfully', () => {
    navigationPage.howXoiHelpsNavigationItem()
    cy.get('.wp-block-cover__inner-container')
      .find('h2')
      .as('pageHeaderBlock')
    cy.get('@pageHeaderBlock').should('have.text', 'Uncover Revenue Opportunities')
    navigationPage.howXoiWorksNavigationItem()
    cy.get('@pageHeaderBlock').should('have.text', 'How XOi Works')
    navigationPage.partnersNavigationItem()
    cy.get('@pageHeaderBlock').should('have.text', 'Integrations')
    navigationPage.knowledgeHubNavigationItem()
    cy.get('@pageHeaderBlock').should('have.text', 'Field Service Knowledge Hub')
    navigationPage.companyNavigationItem()
    cy.get('@pageHeaderBlock').should('have.text', 'About XOi')
    navigationPage.roiCalculatorNavigationItem()
    cy.get('.calculator-header-group')
      .find('h2')
      .should('have.text', 'XOi Value Calculator')
    navigationPage.contactUsNavigationItem()
    cy.get('h2.wp-block-heading').eq(0).should('have.text', ' Contact us for a personalized demo.')
  })

  it('#T2 Hover on each navigation item and verify expanded navigations and their headers', () => {
    const navItemsNamesWithExpandableMenu = ['How XOi Helps', 'How XOi Works', 'Partners', 'Knowledge Hub', 'Company'];
    navItemsNamesWithExpandableMenu.forEach(navElement => {
      cy.wait(1000) //wait is just for demo
      navigationPage.hoverOnEachNavItem(navElement)
      cy.get('.menu-item-copy').find('h2').contains(navElement).should('be.visible')
      cy.contains('Contact Us').realHover()//this is like unhover action
    });
  })

  it('#T3 Verify "How XOi Works" page information blocks', () => { 
    navigationPage.howXoiWorksNavigationItem()
    //Sub-header verification
    cy.get('h5.wp-block-heading').contains(' XOi is the hub in which every part of the job — from the field to the office — connects.').should('be.visible')
    cy.scrollPage(0, 500)
    //verify 'Collect' block
    howItWorksPage.verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible('Collect', 'With XOi, techs easily collect essential job site data: asset information, issues found, fixes applied, and more')
    cy.scrollPage(500, 1500)
    //verify 'Connect' block
    howItWorksPage.verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible('Connect', 'XOi provides the job information your team members need, exactly when they need it.')
    cy.scrollPage(1500, 2500)
    //verify 'Capitalize' block
    howItWorksPage.verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible('Capitalize', 'XOi analyzes collected jobsite data to spark actions that improve your bottom line.')
    cy.scrollPage(2500, 3500)
    //verify 'Training & Support' block
    howItWorksPage.verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible('Training & Support', 'Provide your Techs with a tool that gives them room to grow.')
    cy.scrollPage(3500, 4500)
    //verify 'A.I. Optimization' block
    howItWorksPage.verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible('A.I. Optimization', 'For field service, the promise of revolutionary technology lies with the data that powers it.')
  })

  it('#T4 ROI value calculator page verification', () => { 
    const businessTypes = ['Residential', 'Commercial', 'Both'];
    const radioButtonsValues = ['10 - 50', '50 - 200','200+']
    navigationPage.roiCalculatorNavigationItem()
    businessTypes.forEach(businessType => {
      cy.wait(1000) //wait is just for demo
      roiCalculatorPage.clickOnEachBusinessTypeAndVerifyThatItsChosen(businessType)
    })
    radioButtonsValues.forEach(value => {
      cy.wait(1000) //wait is just for demo
      roiCalculatorPage.clickEachTechQauntityRadioButtonAndVerifyItsChecked(value)
    })
    roiCalculatorPage.fillUpRoiCalculationForm(firstName, lastName, "Daily Bugle", email)
  })

  it('#T5 Verify "Contact us" page', () => {
    navigationPage.contactUsNavigationItem()
    contactUsPage.verifyPageHeaderAndDescriptionAreVisible()
    contactUsPage.sendEmptyFormAndVerifyFieldsValidations()
    contactUsPage.verifyEmailFieldFormatValidation()
    contactUsPage.fillOutAndSendContactUsForm({
      firstName: firstName,
      lastName: lastName,
      companyEmail: email,
      phoneNumber: "1234567890",
      companyName: "Michael",
      jobTitle: "Technician",
      numberOfTechs: "15",
      location: "Seattle"
    })
  })


















})