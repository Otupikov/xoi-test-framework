
const whereDidYouHearAboutUsList = ['Event', 'Facebook', 'Google', 'LinkedIn', 'Word of Mouth', 'Distributor', 'Field Service Management Software']
const expectedPlaceholders = [
    'Enter your First Name',
    'Enter your Last Name',
    'Enter your Your Company Email',
    'Enter your Phone Number',
    'Enter your Company Name',
    'Enter your Job title',
    'Enter your How many technicians do you have in the field?',
    'Enter your What state do you do business in?',
]
export class ContactUsPage{

    verifyPageHeaderAndDescriptionAreVisible() {
        cy.contains(' Contact us for a personalized demo.').should('be.visible')
        cy.contains('XOi implementation is easy — we’ll get you up & running in no time. ').should('be.visible')
    }


    sendEmptyFormAndVerifyFieldsValidations() {
        cy.get('[value="Contact Us"]').click()
        cy.wrap(expectedPlaceholders).each((placeholderName) => { 
            cy.get('div')
                .find(`[placeholder="${placeholderName}"]`)
                .parent('div')
                .find('ul li label')
                .should('have.text', 'Please complete this required field.')
        })
    }

    verifyEmailFieldFormatValidation() { 
        cy.get('[placeholder="Company email address"]').type('wrongEmailFormat')
        cy.get('div')
            .find(`[placeholder="Enter your Your Company Email"]`)
            .parent('div')
            .find('ul li label')
            .should('have.text', 'Email must be formatted correctly.')
    }

    fillOutAndSendContactUsForm({
        firstName,
        lastName,
        companyEmail,
        phoneNumber,
        companyName,
        jobTitle,
        numberOfTechs,
        location
    }) { 
        cy.get('[placeholder="First name"]').type(firstName)
        cy.get('[placeholder="Last name"]').type(lastName)
        cy.get('[placeholder="Company email address"]').type(companyEmail)
        cy.get('[placeholder="Phone number"]').type(phoneNumber)
        cy.get('[placeholder="Company name"]').type(companyName)
        cy.get('[placeholder="Job title"]').type(jobTitle)
        cy.get('[placeholder="Number of techs"]').type(numberOfTechs)
        cy.get('[placeholder="Location"]').type(location)
        cy.get('[name="how_d_you_hear_about_us_"]').select('Event')
    
        whereDidYouHearAboutUsList.forEach(item => {
            cy.get('[name="how_d_you_hear_about_us_"]').select(item)
            if (item == 'Event') {
                cy.get('[placeholder="Event details"]').type('Best event ever')
            }
            cy.get('[name="how_d_you_hear_about_us_"]').select(item)
        })
        // cy.get('form[method="POST"]').submit()
    }
}

export const contactUsPage = new ContactUsPage()