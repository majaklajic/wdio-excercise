describe ("Swag lab Website", async () =>{

    it("Login with incorrect access data", async ()=> {
        await browser.url("https://www.saucedemo.com/");

        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");

        await usernameInput.setValue("abbc");
        await passwordInput.setValue("bbc");

        //pauziramo kako bi vidjeli što smo napravili
       // await browser.pause(4000);
       
       const loginButton=await $("#login-button");
        await loginButton.click();

        //koristimo atribut -> data-test=error jer nemamo id
        const errorLabel = await $('[data-test="error"]');
        await expect (errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

   


    it("Login with correct access data", async ()=> {
        


        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");

        await usernameInput.setValue("standard_user");
        await passwordInput.setValue("secret_sauce");

        //pauziramo kako bi vidjeli što smo napravili
       // await browser.pause(4000);
       
       const loginButton=await $("#login-button");
        await loginButton.click();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

    });

    it("Successful logout", async ()=> {
        

       const navigationButton=await $("#react-burger-menu-btn");
        await navigationButton.click();

        const logoutButton=await $("#logout_sidebar_link");
        await logoutButton.click();


        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        const loginBox= await $(".login-box");
        await expect(loginBox).toBeDisplayed();
       
    });

}
);