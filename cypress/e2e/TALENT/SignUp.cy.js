import { LoginPage } from "../../Classes/LoginPage"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
// cy.fixture('example.json').then((user)=>{
//   const User=user;
// })
const loginPage = new LoginPage()
const signUpPage=new SignUpPage()
const talent1 = new Talent("Hurmain", "Javaid", "hurmain.javed@folium.ai", "Talent", "lilly1234")
describe('SignUp AS TALENT', () => {
  it('SignUp with all valid inputs', () => {
    cy.visit('https://app.staging.tribaja.co/')
    signUpPage.inputSignUpDetails(talent1)

  })
})