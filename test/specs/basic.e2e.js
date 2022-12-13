// describe("Shoutem web", async () => {

/** it("Check if Shoutem Pricing page is loading", async () => {
    await browser.url("https://shoutem.com/pricing/");

  //  await browser.pause(5000);
    
    const heading = await $("h1");
    await expect(heading).toHaveText("There are more ways to create apps with Shoutem");

    }); */

/** it("Test Social template page", async () => {
  await browser.url("https://shoutem.com/apps/social-network/");

  const buildNowButton = await $("a=Build now");

  await buildNowButton.click();

  const heading = await $(".page-title");
  await expect(heading).toHaveText("Choose an app template")
  

}); */

describe("SwagLabs Demo Website", async () => {

  it("Log in with incorrect credentials", async () => {
    await browser.url("https://www.saucedemo.com/");

    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");

    await usernameInput.setValue("wrong123");
    await passwordInput.setValue("wrong12345");

    const loginButton =  await $("#login-button");
    await loginButton.click();
    
    const errorLabel = await $('[data-test="error"]');
    await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
  });


  it("Log in with correct credentials", async () => {

    const usernameInput = await $("#user-name");
    const passwordInput = await $("#password");

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    const loginButton =  await $("#login-button");
    await loginButton.click();

    const heading = await $(".title");
    await expect(heading).toHaveText("PRODUCTS");
    
  });


  it("Logout", async () => {

    const loginButton = await $("#react-burger-menu-btn");
    await loginButton.click();

    const logoutButton = await $("#logout_sidebar_link");
    await logoutButton.click();

    const login =  await $(".login-box");
    await expect(login).toBeDisplayed();
  });

});