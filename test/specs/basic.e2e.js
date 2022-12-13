describe("Swag Labs", async () => {
/** it("Check if Shoutem Pricing page is loading", async () => {
       await broswer.url("https://shoutem.com/pricing/");

      const heading = await $("h1");
     await expect (heading).toHaveText("There are more ways to create apps with Shoutem");
 });
 */
/** it("Test Social template page", async () => {
    await browser.url("https://shoutem.com/apps/social-network/");

    const buildNowButton = await $("a=Build now");
    await buildNowButton.click();

    const heading= await $(".page-title");
    await expect (heading).toHaveText("Chose an app template")
});
*/

it("Login krivi pristupni podaci", async () => {
    await browser.url("https://www.saucedemo.com/");
    
    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");
    

    await usernameInput.setValue("dsdsdsdsds");
    await passwordInput.setValue("fhjhfjsh");

    const loginButton = await $("#login-button");
    await loginButton.click();

    const errorLabel = await $('[data-test="error"]');
    await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
}); 

it("Login valjani pristupni podaci", async () => {
    
    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");
    

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    const loginButton = await $("#login-button");
    await loginButton.click();

    const title = await $('.title');
    await expect(title).toBeDisplayed('Products');

});

it("Logout", async () => {
    await browser.url("https://www.saucedemo.com/");

  
    const usernameInpput = await $('#user-name');
    const passwordInput = await $('#password');
   
    
    await usernameInpput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    
    const loginButton = await $("#login-button");
    await loginButton.click();
   
    
    const title = await $('.title')
    await expect(title).toBeDisplayed('Products')

    
    const burger = await $("#react-burger-menu-btn");
    await burger.click();

    
    const logoutButton = await $("#logout_sidebar_link");
    await logoutButton.click();

    
    const loginButton2 = await $(".submit-button btn_action");
    await loginButton2.isDisplayed();
});
});

