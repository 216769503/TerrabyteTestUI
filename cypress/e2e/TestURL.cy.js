
describe('Test the fuctionality of Home page', ()=> {

    it('Verify the functionality' ,()=>{

        cy.visit('https://terrabyte.software/');
        cy.url().should("eq", "https://terrabyte.software/");
        cy.url().should("contain", "terrabyte");
        cy.wait(200);
        cy.location("href")
          .should("include", "terrabyte.software")
          .and("contains", "terrabyte");
        cy.reload();
    
    });
});