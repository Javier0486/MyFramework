import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page'
// import SecurePage from '../pageobjects/home.page'
import homePage from '../pageobjects/home.page';
//import exp = require('constants');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.LoginPage).toBeExisting()
//         await expect(SecurePage.LoginPage).toHaveTextContaining(
//              'You logged into a secure area!')
//     })
// })

describe('Home Page', () => {
    it('should be a hero package with articles', async () => {
        await homePage.open();

        await expect(homePage.heroCard).toBeExisting();
        //await expect(homePage.articlesInHero).toBeClickable(); //to validate a random article is clickable
        await expect(homePage.articlesInHero).toBeExisting();
    });

    it('the articles in the hero should be clickable - click random article', async() => {
        await homePage.open();

        await expect(homePage.articlesInHero).toBeClickable();
        await homePage.articlesInHero.click();
    });

});