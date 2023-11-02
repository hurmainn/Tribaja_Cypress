import { SignUpPage } from "../../Classes/SignUpPage";
import { VerifyOTP } from "../../Classes/VerifyOTP";
import { Onboarding } from "../../Classes/OnboardingPages";

describe("SIGN UP", () => {
    const signUpPage = new SignUpPage()
    const verifyOTP = new VerifyOTP()
    const onboarding = new Onboarding()
    let talentDataa;
    let talent;
    let talent2;
    let testTalent;
    let emptyTalent;
    let errorMessage;

    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })
    })
    beforeEach(() => {
        cy.viewport(2500, 1399)
        cy.visit('https://app.staging.tribaja.co/')
        talent = talentDataa.talents[5];
        talent2 = talentDataa.talents2[0];  //valid
        emptyTalent = talentDataa.emptyTalent[0];
    })
    context('POSIITVE SCENARIOS', () => {
        it('Successful Sign Up', () => {
            signUpPage.SignUp(talent)
            cy.wait(5000)
            //OTP VERIFICATION
            //it must include this because we are doing a successfull login
            //all inputs shpuld be correct as the test expects
            cy.url().then((url) => {
                expect(url).to.include('/verify-otp')
                cy.pause(2000)  //enter otp
            })
            verifyOTP.VerifyEmail(talent)
            cy.wait(2500)
            //LOGIN VERIFIEED USER
            verifyOTP.LoginAfterVerification(talent)
            //User is signing up correctly - (for the first time) - should proceed to onboarding 
            //check onboarding url
            cy.url().should('include', '/onboarding');   //verified sign up

            //check if onboarding is false
            cy.getCookie('boarding-completed').then((cookie) => { expect(cookie.value).to.equal('false') })

            onboarding.CompleteOnboarding(talent)


        })
    })
    context('NEGATIVE SCENARIOS', () => {
        it.only('Empty Fields', () => {
            errorMessage = "Fill all the forms."
            // Test when all fields are left empty
            //first check if all fields are empty   
            signUpPage.SignUp(emptyTalent)
            cy.url()
            cy.get('input[name="firstName"][required]:invalid').should('exist')
            cy.get('input[name="lastName"][required]:valid').should('not.exist')
            cy.get('input[name="email"][required]:invalid').should('exist')
            cy.get('input[name="password"][required]:invalid').should('exist')
            cy.get('input[name="repeatPassword"][required]:invalid').should('exist')
            cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[1]')
                .should('have.value', '')
            cy.url().should('not.include', '/verify-otp');
            cy.url().should('include', '/signup');
            // signUpPage.errorMessageDiv.invoke('text').then((text) => {
            //     expect(text).to.equal(errorMessage)
            // })

        });

        it('Individual Empty Fields', () => {
            // Test each field individually when it's left empty
        });

        it('Invalid Email Format', () => {
            // Test when an invalid email format is entered
        });

        it('Password Requirements', () => {
            // Verify that the application enforces password requirements
        });

        it('Password Confirmation Mismatch', () => {
            // Test when "Create Password" and "Repeat Password" do not match
        });

        it('Existing Email', () => {
            // Check what happens when an existing email address is used for sign-up
        });

        it('Valid Email', () => {
            // Test for a valid email format
        });

        it('Invalid Email', () => {
            // Test for an invalid email format
        });

        it('Email Validation', () => {
            // Test if the email field is correctly validated
        });

        it('Valid Password', () => {
            // Test for a valid password
        });

        it('Invalid Password', () => {
            // Test for an invalid password format
        });

        it('Password Confirmation', () => {
            // Verify that "Create Password" and "Repeat Password" match
        });

        it('Valid Names', () => {
            // Test with valid first and last names
        });

        it('Invalid Names', () => {
            // Test with invalid characters in the name fields
        });

        it('Select Role', () => {
            // Test the role selection from available options
        });

        it('Default Role', () => {
            // Ensure that a default role is selected if none is chosen
        });

        it('Password Strength Indicator', () => {
            // Verify that the application provides feedback on password strength
        });

        it('Field Validations', () => {
            // Check if all fields provide appropriate error messages for invalid data
        });
        it('passwords dont match', () => {

        })
        // Additional test scenarios and optional tests can be added here.
    });
    context('EMAIL CONFIRMATION SCENARIO', () => {

    });
})