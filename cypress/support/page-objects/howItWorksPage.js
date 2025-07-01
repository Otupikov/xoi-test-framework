export class HowItWorksPage { 

    verifyBlockHeaderAndBlockSubHeaderDescriptionAreVisible(blockHeader, blockDescription) { 
        cy.get('.block-group-container').find('h3').contains(blockHeader).should('be.visible')
        cy.get('.block-group-container').find('div div p').contains(blockDescription).should('be.visible')
    }




}

export const howItWorksPage = new HowItWorksPage()