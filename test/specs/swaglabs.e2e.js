describe("Swag Labs", async () => {
    /* it("Check Login - Krivo", async () => {
        await browser.url("https://www.saucedemo.com/");

        //Deklariranje da možemo kasnije koristiti (Ime je proizvoljno)
        const usernameInpput = await $('#user-name');
        const passwordInput = await $('#password');
        
        //Upisivanje vrijednosti u input fieldove
        await usernameInpput.setValue("blalba");
        await passwordInput.setValue("blalba");

        //Deklariranje i korištenje login buttona
        const loginButton = await $("#login-button");
        await loginButton.click();

        //Dohvaćanje errora ukoliko je ispisan
        const errorLabel = await $('[data-test="error"]');
        
        //Očekujemo ispisani text sa krivim loginom
        await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }); */

    /* it("Check Login - Ispravno", async () => {
        await browser.url("https://www.saucedemo.com/");

        //Deklariranje da možemo kasnije koristiti (Ime je proizvoljno)
        const usernameInpput = await $('#user-name');
        const passwordInput = await $('#password');
        
        //Upisivanje vrijednosti u input fieldove
        await usernameInpput.setValue("standard_user");
        await passwordInput.setValue("secret_sauce");

        //Deklariranje i korištenje login buttona
        const loginButton = await $("#login-button");
        await loginButton.click();
        
        const title = await $('.title');
        await expect(title).toBeDisplayed('Products');
    }); */

    it("Logout", async () => {
        await browser.url("https://www.saucedemo.com/");

        //Deklariranje da možemo kasnije koristiti (Ime je proizvoljno)
        const usernameInpput = await $('#user-name');
        const passwordInput = await $('#password');
        
        //Upisivanje vrijednosti u input fieldove
        await usernameInpput.setValue("standard_user");
        await passwordInput.setValue("secret_sauce");

        //Deklariranje i korištenje login buttona
        const loginButton = await $("#login-button");
        await loginButton.click();
        
        //Provjera postoji li title "products"
        const title = await $('.title')
        await expect(title).toBeDisplayed('Products')

        //Otvaranje hamburgera
        const burger = await $("#react-burger-menu-btn");
        await burger.click();

        //Klik na login
        const logoutButton = await $("#logout_sidebar_link");
        await logoutButton.click();

        await browser.pause(5000);
    });
});