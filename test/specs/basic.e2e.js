describe ("Swag Labs Demo Website", async () => {


it("Login with incorect credentials", async () => {

await browser.url("https://www.saucedemo.com/");

   const usernameInput = await $("#user-name"); 
   const passwordInput = await $("#password"); 
    
   await usernameInput.setValue("adjlhs");
   await passwordInput.setValue("kfjalf");

   const loginButton= await $("#login-button");
   await loginButton.click();

   const errorLabel = await $('[data-test="error"]');
   await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");


});

  it("Login with corect credentials", async () => {

    const usernameInput = await $("#user-name"); 
    const passwordInput = await $("#password"); 
     
    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");

    const loginButton= await $("#login-button");
    await loginButton.click();


    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();
  });

  it("Logout", async () => {

    const burgerButton= await $("#react-burger-menu-btn");
    await burgerButton.click();

    const logOutButton = await $("#logout_sidebar_link");
    await logOutButton.click();

    const login = await $(".login-box");
    await expect(login).toBeDisplayed();

  });


});