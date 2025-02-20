
describe('Test the home page functionality', ()=>{

    it.only('Verify the user functionality home page',()=>{

     cy.visit('https://terrabyte.software/');
     cy.scrollTo('bottom');
     cy.scrollTo('center');
     cy.scrollTo('top');
     cy.get('.inline-flex').click();
     cy.get(' li:nth-child(1) a:nth-child(1)',{ timeout: 10000 }).click({force:true});
     cy.get('li:nth-child(2) a:nth-child(1)',{ timeout: 10000 }).click({force:true});
     cy.get('li:nth-child(3) a:nth-child(1)').click({force:true});
     cy.get('li:nth-child(4) a:nth-child(1)').click({force:true}); 
     cy.get('.px-2 > :nth-child(4)').click({force:true});
     cy.get('li:nth-child(1) a:nth-child(1)').click({force:true}); 
     cy.get('.px-2 > :nth-child(5)').click({force:true});
     cy.get('.px-2 > :nth-child(6)').click({force:true});   

    });
});