
  describe('Terrabyte Software Login Page Tests ', ()=>{

    it('Verify the login page URL',()=>{

        cy.visit('https://app.terrabyte.software/login');
        cy.url().should('eq','https://app.terrabyte.software/login');
        cy.url().should('contains',"terrabyte").and('contain',"software")
        cy.wait(2000);
        cy.url().should('include',"e.software/login");
    });

     it('Verify Sign Up functionality',()=>{

        cy.visit("https://app.terrabyte.software/login");
        cy.viewport(700,500);
        cy.get(':nth-child(6) > .underline').click({force:true});
        cy.get(':nth-child(1) > #email').clear().type('Lehlohonolo Modiga');
        cy.get(':nth-child(2) > #email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get("div[class='card flex justify-center w-full'] input[type='password']").clear().type('68684$aB');
        cy.get("div[class='card flex flex-col justify-center w-full'] input[type='password']").clear().type('68684$aB');
        cy.wait(2000);
        cy.get('[aria-label="Sign up"]').click({force:true});
        // Issue: When the user tries to sign up, the operation fails and returns "Failed to fetch"
     
     });


     it('Verify Login functionality', ()=>{

        cy.visit("https://app.terrabyte.software/login");
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get("input[type='password']").clear().type('68684$aB');
        cy.wait(2000);
        cy.get('[aria-label="Login"]').dblclick({force:true});
        // Issue: User cannot log in, and the operation returns "Failed to fetch"
    })


     it('Verify Reset Password functionality',()=>{

        cy.visit("https://app.terrabyte.software/login");
        cy.get(':nth-child(2) > .text-center > .underline').click();
        cy.get('#email').clear().type('Lehlohonolo.best@gmail.com');
        cy.get('.text-primary-inverse').click({force:true});
        cy.wait(2000);
        cy.get('.text-white').click({force:true});
        // Issue: The password reset email is not sent when requested

     })

     it('Login using Google Account',()=>{

        cy.visit("https://app.terrabyte.software/login");
        cy.get('.w-12').dblclick({force:true});
        // Issue: Clicking the Google login icon does not navigate to the Google authentication page

     })
  });