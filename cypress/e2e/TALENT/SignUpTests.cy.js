import { SignUpPage } from "../../Classes/SignUpPage";

describe("SIGN UP", () => {
    const signUpPage = new SignUpPage()
    let talentDataa;
    let talent;
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })
    })
    beforeEach(() => {
        cy.viewport(2500, 1399)
        cy.visit('https://app.staging.tribaja.co/')
        talent = talentDataa.talents[0];
    })
    context('POSIITVE SCENARIOS', () => {
        it('ALL VALID INPUTS', () => {
            cy.log(talent.emailAddress)
        })
    })
    context('NEGATIVE SCENARIOS', () => {

        it('Successful Sign-Up', () => {
            // Test a successful sign-up with valid data in all fields
        });

        it('Empty Fields', () => {
            // Test when all fields are left empty
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

        // Additional test scenarios and optional tests can be added here.
    });
    context('EMAIL CONFIRMATION SCENARIO', () => {

    });
})