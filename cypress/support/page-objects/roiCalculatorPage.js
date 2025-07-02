export class RoiCalculatorPage { 

    clickOnEachBusinessTypeAndVerifyThatItsChosen(businessType) { 
        cy.get('div .customer-card-wrapper').find(`label [value="${businessType}"]`).as('chosenBusinessType').click({ force: true })
        cy.get('label')
            .find('.card-details')
            .find('span').contains(`${businessType}`)
            .parent('.card-details')
            .should('have.css', 'border-color', 'rgb(0, 175, 215)')
    }

    clickEachTechQauntityRadioButtonAndVerifyItsChecked(value) { 
        cy.get(`input[name='number-of-techs-employed'][value='${value}']`).click({ force:true })
        cy.get('label')
            .find(`input[name='number-of-techs-employed'][value='${value}']`)
            .parent('label')
            .find('.circle')
            .should('have.css', 'border-color', 'rgb(0, 175, 215)')
    }

    fillUpRoiCalculationForm(firstName, lastName, companyName, email) {
        cy.get('[name="firstname"]').type(firstName)
        cy.get('[name="lastname"]').type(lastName)
        cy.get('[name="company"]').type(companyName)
        cy.get('[name="email"]').type(email)
        // cy.contains('Get Your Results').click()
    }
}

export const roiCalculatorPage = new RoiCalculatorPage()