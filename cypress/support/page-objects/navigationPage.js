import 'cypress-real-events/support'

export class NavigationPage { 

    //click on navigation items

    howXoiHelpsNavigationItem() { 
        cy.get('#menu-item-244').click()
    }

    howXoiWorksNavigationItem() { 
        cy.get('#menu-item-245').click()
    }

    partnersNavigationItem() { 
        cy.get('#menu-item-246').click()
    }

    knowledgeHubNavigationItem() {
        cy.get('#menu-item-32687').click()
    }

    companyNavigationItem() { 
        cy.get('#menu-item-248').click()
    }

    roiCalculatorNavigationItem() { 
        cy.get('#menu-item-35056').click()
    }

    contactUsNavigationItem() { 
        cy.get('#menu-item-37432').click()
    }

    // hover on navigation items
    
    hoverOnEachNavItem(navItemName) { 
        cy.get('#primary-menu-list').find('li').contains(navItemName).realHover()
    }

}

export const navigationPage = new NavigationPage()