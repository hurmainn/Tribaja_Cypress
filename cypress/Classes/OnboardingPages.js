import { Questions } from "./Questions"

export class Onboarding {
    constructor() {
        this.question = new Questions()
    }
    getGetStartedButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div/div/a")
    }
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //TALENT QUESTION 1 PAGE
    //to check if the question is right
    //using css selectors so i can use this for every page
    getQuestionDiv() {
        return cy.get('.info-container .info-description')
    }
    getAnswersAllOptions() {
        return cy.get('div .btn-options div')
    }

    // getElementsCount() {
    //    return this.getAnswersAllOptions().then(($elements) => {
    //         const count = $elements.length;
    //         // Now you can use the 'count' variable
    //         cy.log('Count of elements:', count);
    //         return count;
    //     });
    // }

    fillOnboardingDetails(num) {
        // let count = this.getAnswersAllOptions().length
        // cy.log("no. of button elements: ",count)

        let questionText = ""
        this.getQuestionDiv().then((questiondiv) => {
            questionText = (questiondiv).text()
            cy.log("Question Text: ", questionText)
            let count;
            let random;
            switch (num) {

                case 1:
                    expect(questionText).to.include(this.question.q1);
                    //check if all the options are clickable:
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    //  this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })

                    break;
                case 2:
                    expect(questionText).to.include(this.question.q2);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    // this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 3:
                    expect(questionText).to.include(this.question.q3);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');
                    
                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    //  this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 4:
                    expect(questionText).to.include(this.question.q4);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    // this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 5:
                    expect(questionText).to.include(this.question.q5);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                //    this.getElementsCount().then((count) => {
                //         cy.log("no. of button elements: ", count)
                //         random = this.getRandomNumber(0, count)
                //         cy.log("Random Number: ", random)

                //         this.getAnswersAllOptions().eq(random).click({ force: true })
                //     })
                    break;
                case 6:
                    expect(questionText).to.include(this.question.q6);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');
                    
                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    // this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 7:
                    expect(questionText).to.include(this.question.q7);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    // this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 8:
                    expect(questionText).to.include(this.question.q8);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    // this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                case 9:
                    expect(questionText).to.include(this.question.q9);
                    this.getAnswersAllOptions().should('not.have.class', 'disabled');

                    this.getAnswersAllOptions().then(($elements) => {
                        count = $elements.length;
                        // Now you can use the 'count' variable
                        cy.log('Count of elements:', count);
                        random = this.getRandomNumber(0, count-1)
                        cy.log("Random Number: ", random)
                        this.getAnswersAllOptions().eq(random).click({ force: true })
                    })
                    //  this.getElementsCount().then((count) => {
                    //     cy.log("no. of button elements: ", count)
                    //     random = this.getRandomNumber(0, count)
                    //     cy.log("Random Number: ", random)

                    //     this.getAnswersAllOptions().eq(random).click({ force: true })
                    // })
                    break;
                default:
                    break;
                // Code to execute if none of the cases match expression
            }
        })
    }
}