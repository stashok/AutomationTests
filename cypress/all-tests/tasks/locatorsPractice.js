describe('Practice for locators', () => {
    it('Send Message', () => {

        cy.visit('https://techstepacademy.com/training-ground')



        cy.visit('https://techstepacademy.com/training-ground/')
        cy.get('[name^="i2_"]')
        cy.xpath("//*[contains(@name,'i2_')]")

        cy.get('input[id="ipt1"]')
        cy.xpath("//input[@id='ipt1']")

        cy.get('button').contains('Button1')
        cy.xpath("//button[contains(text(),'Button1')]")

        cy.get('h2').contains('A dropdown of three things').next('select')
        cy.xpath("//h2[contains(text(),'A dropdown of three things')]/following::select")

        cy.get('option').contains('Beets').siblings('option')
        cy.xpath("//option [contains(text(),'Beets')]/preceding-sibling::option ")

        cy.get('div[class="sqs-block-content"] > p')
        cy.xpath('//div[@class="sqs-block-content"]/child::p')

})
})