import { LoginPage } from "../../Classes/LoginPage"
import { Talent } from "../../Classes/Talent"
// cy.fixture('example.json').then((user)=>{
//   const User=user;
// })
const loginPage = new LoginPage()
const talent1 = new Talent("Hurmain", "Javaid", "hurmain.javed@folium.ai", "Talent", "lilly1234")
describe('LOGIN AS TALENT', () => {

  it('Log In with Valid Credentials', () => {

    cy.visit('https://app.staging.tribaja.co/')

  })
})