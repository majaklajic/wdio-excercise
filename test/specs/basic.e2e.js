/* 
describe("Swag Labs", async () => {

    it("Check if Login/Logout works", async () => {
        await browser.url("https://www.saucedemo.com/");

        const username = await $("#user-name");
        await username.click();
        await browser.keys(['v','a','v','z',]);

        const password = await $("#password");
        await password.click();
        await browser.keys(['v','3','v','z','z']);

        const button = await $("#login-button");
        await button.click();
       
        const error = await $("h3");
        await expect(error).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

});


describe("Swag Labs", async () => {

    it("Check if Login/Logout works", async () => {
        await browser.url("https://www.saucedemo.com/");

        const username = await $("#user-name");
        await username.click();
        await browser.keys(['s','t','a','n','d','a','r','d','_','u','s','e','r']);

        const password = await $("#password");
        await password.click();
        await browser.keys(['s','e','c','r','e','t','_','s','a','u','c','e']);

        const button = await $("#login-button");
        await button.click();
       
        const inventor = await $("#inventory_container");
        await expect(inventor).toBeDisplayed()
    });

});

*/

describe("Swag Labs", async () => {

    it("Check if Login/Logout works", async () => {
        await browser.url("https://www.saucedemo.com/");

        const username = await $("#user-name");
        await username.click();
        await browser.keys(['s','t','a','n','d','a','r','d','_','u','s','e','r']);

        const password = await $("#password");
        await password.click();
        await browser.keys(['s','e','c','r','e','t','_','s','a','u','c','e']);

        const button = await $("#login-button");
        await button.click();

        const hamburger = await $(".bm-burger-button");
        await hamburger.click();

        const logout = await $("#logout_sidebar_link");
        await logout.click();
       
        const login = await $(".login-box");
        await expect(login).toBeDisplayed()
    });

});