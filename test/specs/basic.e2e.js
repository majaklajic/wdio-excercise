describe("Swag Labs", async () => {

 /** 1.vjezba  
  * it("Check if Shoutem Pricing page is loading", async () =>{
        await browser.url("https://shoutem.com/pricing/");
        await browser.pause(5000);

        const heading = await $("h1");
        await expect(heading).toHaveText("There are more ways to create apps with Shoutem");

    });
*/ 
/**   it("Test Social template page", async () =>{
        await browser.url("https://shoutem.com/apps/social-network/");
        const btn = await $('a=BUILD NOW');
        await btn.click();

        const heading = await $("h1");
        await expect(heading).toHaveText("Choose an app template");

    });
*/ 
    
   it("Login krivi pristupni podaci", async () =>{
        await browser.url("https://www.saucedemo.com/");
        const usernameInput = await $("#user-name");
        await usernameInput.setValue("neispravan");

        const password = await $("#password");
        await password.setValue("neispravan");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const errorLabel = await $('[data-test="error"]');
        await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("Login ispravni pristupni podaci", async () =>{
        await browser.url("https://www.saucedemo.com/");
        const usernameInput = await $("#user-name");
        await usernameInput.setValue("standard_user");

        const password = await $("#password");
        await password.setValue("secret_sauce");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const title = await $('.title');
        await expect(title).toBeDisplayed('Products');
    });


    it("Logout", async ()=>{
                await browser.url("https://www.saucedemo.com/");
        const usernameInput = await $("#user-name");
        await usernameInput.setValue("standard_user");

        const password = await $("#password");
        await password.setValue("secret_sauce");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const title = await $('.title');
        await expect(title).toBeDisplayed('Products');

        const hamburger = await $("#react-burger-menu-btn");
        await hamburger.click();

        const logout = await $("#logout_sidebar_link");
        await logout.click();

        const login = await $(".submit-button btn_action");
        await login.isDisplayed();

    });
});