import { SignUpPage } from "../../Classes/SignUpPage";
import { VerifyOTP } from "../../Classes/VerifyOTP";
import { Onboarding } from "../../Classes/OnboardingPages";
import _, { forEach } from 'lodash';
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
    let invalidEmailAddresses_ = []
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })
    })
    beforeEach(() => {
        cy.viewport(2500, 1399)
        cy.visit('https://app.staging.tribaja.co/')
        signUpPage.checkExistenceandVisibilityOfElements()
        invalidEmailAddresses_ = talentDataa.invalidEmailAddresses
        talent = talentDataa.talents[5];
        testTalent = talent
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
        afterEach(() => {
            cy.url().should('not.include', '/verify-otp')
            cy.url().should('include', '/signup')
        })
        it('All Empty Fields', () => {
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
            cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                .should('include.text', '')
            cy.url().should('not.include', '/verify-otp');
            cy.url().should('include', '/signup');
            // signUpPage.errorMessageDiv.invoke('text').then((text) => {
            //     expect(text).to.equal(errorMessage)
            // })

        });

        context('Individual Empty Fields', () => {

            beforeEach(() => {
                testTalent = _.cloneDeep(talent);
            })
            it('First Name Field', () => {
                //testTalent = _.cloneDeep(talent);
                // testTalent = talentDataa.talents[5];
                testTalent.firstName = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('not.exist')
                cy.get('input[name="lastName"][required]:valid').should('exist')
                cy.get('input[name="email"][required]:valid').should('exist')
                cy.get('input[name="password"][required]:valid').should('exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('include.text', talent.role)
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');
            });

            it('Last Name Field', () => {
                // testTalent = _.cloneDeep(talent);
                testTalent.lastName = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('exist')
                cy.get('input[name="lastName"][required]:valid').should('not.exist')
                cy.get('input[name="email"][required]:valid').should('exist')
                cy.get('input[name="password"][required]:valid').should('exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('include.text', talent.role)
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');
            });

            it('Email Address Field', () => {
                // testTalent = _.cloneDeep(talent);
                testTalent.emailAddress = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('exist')
                cy.get('input[name="lastName"][required]:valid').should('exist')
                cy.get('input[name="email"][required]:valid').should('not.exist')
                cy.get('input[name="password"][required]:valid').should('exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('include.text', talent.role)
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');
            });

            it('Role Field', () => {
                // testTalent = _.cloneDeep(talent);
                cy.log(testTalent)
                testTalent.role = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('exist')
                cy.get('input[name="lastName"][required]:valid').should('exist')
                cy.get('input[name="email"][required]:valid').should('exist')
                cy.get('input[name="password"][required]:valid').should('exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('have.text', '')
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');
            });

            it('Create Password Field', () => {
                signUpPage.RepeatPasswordTextBox.type(testTalent.password)
                // testTalent = _.cloneDeep(talent);
                testTalent.password = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('exist')
                cy.get('input[name="lastName"][required]:valid').should('exist')
                cy.get('input[name="email"][required]:valid').should('exist')
                cy.get('input[name="password"][required]:valid').should('not.exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('include.text', talent.role)
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');
            });

            it('Repeat Password Field', () => {
                signUpPage.PasswordTextBox.type(testTalent.password)
                // testTalent = _.cloneDeep(talent);
                testTalent.password = ''  //empty the first name before signing in
                signUpPage.SignUp(testTalent)
                cy.get('input[name="firstName"][required]:valid').should('exist')
                cy.get('input[name="lastName"][required]:valid').should('exist')
                cy.get('input[name="email"][required]:valid').should('exist')
                cy.get('input[name="password"][required]:valid').should('exist')
                cy.get('input[name="repeatPassword"][required]:valid').should('not.exist')
                cy.xpath('//*[@id="root"]/div/div/div[2]/form/label[4]/div/div/span[2]')
                    .should('include.text', talent.role)
                cy.url().should('not.include', '/verify-otp');
                cy.url().should('include', '/signup');

            });

        });

        context.skip('Invalid Email Formats', () => {
            // it("test", () => {
            //     cy.log(invalidEmailAddresses_)
            //     console.log(invalidEmailAddresses_)
            //     cy.log(invalidEmailAddresses_[0].emailAddress)
            // })
            // it("test", () => {
            //     cy.log(invalidEmailAddresses_)
            //     cy.log(invalidEmailAddresses_[1].emailAddress)
            // })
            const errorMessage = "Enter a valid email address";
            //  const invalidEmailAddress = invalidEmailAddresses_[i].emailAddress;
            it('Invalid Email Formats', () => {
                invalidEmailAddresses_.forEach(($invalidEmailAddress) => {
                    cy.log("*** NEXT TEST ***")
                    const testTalent = _.cloneDeep(talent);
                    testTalent.emailAddress = $invalidEmailAddress.emailAddress;
                    cy.log(testTalent)
                    signUpPage.SignUp(testTalent);
                    cy.url().should('not.include', '/verify-otp')
                    cy.url().should('include', '/signup')
                    //If it is not considered invalid by html default validation then error message must appear
                    if (talent.emailAddress === '/@/g') {
                        cy.get('input[name="email"][required]:invalid').should('not.be.visible')
                        cy.contains(errorMessage).should('be.visible');
                    }
                    else {
                        cy.get('input[name="email"][required]:invalid').should('be.visible')
                    }
                    // Now, you can assert that the error message is displayed
                    // cy.contains(errorMessage).should('be.visible');
                })
            });
        })
    });


    // it("Invalid Email Format 2", () => {
    //     testTalent = _.cloneDeep(talent);
    //     cy.log("before invalid: ", testTalent.emailAddress)
    //     testTalent.emailAddress = talent2.invalidEmailAddress2;
    //     cy.log(testTalent.emailAddress)
    //     signUpPage.SignUp(testTalent)
    // })
    // it("Invalid Email Format 3", () => {
    //     testTalent = _.cloneDeep(talent);
    //     cy.log("before invalid: ", testTalent.emailAddress)
    //     testTalent.emailAddress = talent2.invalidEmailAddress3;
    //     cy.log(testTalent.emailAddress)
    //     signUpPage.SignUp(testTalent)
    // })
    // it("Invalid Email Format 4", () => {
    //     testTalent = _.cloneDeep(talent);
    //     cy.log("before invalid: ", testTalent.emailAddress)
    //     testTalent.emailAddress = talent2.invalidEmailAddress4;
    //     cy.log(testTalent.emailAddress)
    //     signUpPage.SignUp(testTalent)
    // })
    // it("Invalid Email Format 5", () => {
    //     testTalent = _.cloneDeep(talent);
    //     cy.log("before invalid: ", testTalent.emailAddress)
    //     testTalent.emailAddress = talent2.invalidEmailAddress5;
    //     cy.log(testTalent.emailAddress)
    //     signUpPage.SignUp(testTalent)
    // })


    context.only('Password Requirements', () => {

        beforeEach(() => {
            testTalent = _.cloneDeep(talent);
        })
        afterEach(() => {
            cy.url().should('not.include', '/verify-otp')
            cy.url().should('include', '/signup')
        })
        // short password
        it('Short Password', () => {
            errorMessage = "This password is too short. It must contain at least 8 characters."
            testTalent.emailAddress = 'hurmain.javed+0981@folium.ai'
            testTalent.password = 'lily'
            signUpPage.SignUp(testTalent)
            cy.contains(errorMessage).should('be.visible');
        })
        //password matches email 
        it('Password matches email', () => {
            errorMessage = "The password is too similar"
            testTalent.emailAddress = 'hurmain.javed+0982@folium.ai'
            testTalent.password = 'hurmainjaved'
            signUpPage.SignUp(testTalent)
            cy.url().should('not.include', '/verify-otp')
            cy.url().should('include', '/signup')
            cy.contains(errorMessage).should('be.visible');

        })
        //long password / don't allow
        it('Long Password', () => {
            cy.log('to define yet')
        })
        it('Password Strength Indicator', () => {
            // Verify that the application provides feedback on password strength
        });
        it('Password Confirmation Mismatch', () => {
            errorMessage = "Both passwords don't match"
            testTalent = _.cloneDeep(talent);
            signUpPage.SignUp(testTalent)
            cy.contains(errorMessage).should('be.visible');
        });
        it('Password Confirmation', () => {
            let password1 = talent.password;
            signUpPage.PasswordTextBox.clear().type(talent.password, { force: true })
            signUpPage.RepeatPasswordTextBox.clear().type(talent.password, { force: true })

            signUpPage.PasswordTextBox.should('have.value', password1)
            signUpPage.RepeatPasswordTextBox.should('have.value', password1)

        });
    });

    it.only('Existing Email', () => {
        errorMessage = "A user is already registered with this e-mail address."
        testTalent = _.cloneDeep(talent)
        testTalent.emailAddress = talent2.existingEmailAddress
        signUpPage.SignUp(testTalent)
        cy.contains(errorMessage).should('be.visible');
        cy.url().should('not.include', '/verify-otp')
        cy.url().should('include', '/signup')
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



    it('Field Validations', () => {
        // Check if all fields provide appropriate error messages for invalid data
    });


});



// context('Character Limit Tests', () => {
//     it('Maximum Character Limit for First Name', () => {
//         const maxCharFirstName = 'A'.repeat(50); // Assuming the max character limit is 50
//         testTalent.firstName = maxCharFirstName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Maximum Character Limit for Last Name', () => {
//         const maxCharLastName = 'B'.repeat(50); // Assuming the max character limit is 50
//         testTalent.lastName = maxCharLastName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Maximum Character Limit for Email Address', () => {
//         const maxCharEmail = 'c'.repeat(100); // Assuming the max character limit is 100
//         testTalent.emailAddress = maxCharEmail;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Maximum Character Limit for Password', () => {
//         const maxCharPassword = 'D'.repeat(64); // Assuming the max character limit is 64
//         testTalent.password = maxCharPassword;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Minimum Character Limit for First Name', () => {
//         const minCharFirstName = 'E'; // Assuming the min character limit is 1
//         testTalent.firstName = minCharFirstName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input meets the minimum character limit
//         // Add assertions as needed
//     });

//     it('Minimum Character Limit for Last Name', () => {
//         const minCharLastName = 'F'; // Assuming the min character limit is 1
//         testTalent.lastName = minCharLastName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input meets the minimum character limit
//         // Add assertions as needed
//     });

//     it('Minimum Character Limit for Email Address', () => {
//         const minCharEmail = 'G'; // Assuming the min character limit is 1
//         testTalent.emailAddress = minCharEmail;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input meets the minimum character limit
//         // Add assertions as needed
//     });

//     it('Minimum Character Limit for Password', () => {
//         const minCharPassword = 'H'; // Assuming the min character limit is 1
//         testTalent.password = minCharPassword;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input meets the minimum character limit
//         // Add assertions as needed
//     });

//     it('Valid Character Input for First Name', () => {
//         const validFirstName = 'John';
//         testTalent.firstName = validFirstName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Valid Character Input for Last Name', () => {
//         const validLastName = 'Doe';
//         testTalent.lastName = validLastName;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Valid Character Input for Email Address', () => {
//         const validEmail = 'john.doe@example.com';
//         testTalent.emailAddress = validEmail;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });

//     it('Valid Character Input for Password', () => {
//         const validPassword = 'StrongPassword123';
//         testTalent.password = validPassword;
//         signUpPage.SignUp(testTalent);
//         // Ensure the input is accepted
//         // Add assertions as needed
//     });
// });