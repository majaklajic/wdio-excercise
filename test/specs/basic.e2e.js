/** 
describe("Shoutem web", async () => {
    it("Check if Shoutem Pricing page is loading", async () => {
        await browser.url("https://shoutem.com/pricing/");

        const heading = await $("h1");
        await expect(heading).toHaveText("There are more ways to create apps with Shoutem");
    });


    it("Test Social template page", async () => {
        await browser.url("https://shoutem.com/apps/social-network/");

        const buildNowButton = await $("a=Build now"); //prvo nađem preko inspekta preko teksta na gumbu
        
        await buildNowButton.click(); //kliknem na gumb

        await browser.pause(5000); //pauza da vidim jesam sve dobro napravila dosad
        
(  const heading = await $("h1");
        await expect(heading).toHaveText("Choose an app template");     ) 
        
        ILI 

        const heading = await $(".page-title");
        await expect(heading).toHaveText("Choose an app template");
    });
});
u terminal upisujem npm run test da se pokrene test
*/
describe("SwagLabs Demo Website", async () =>{ /**describe i it funkcija prima dva parametra: ime tog testa i asinkrona fukncija */
    
    it("Check log in with wrong credentials", async () => {
        await browser.url("https://www.saucedemo.com/"); /**svaka funkcija mora započeti s await kako bi se funkcije odvijale jedna za drugom, a ne istovremeno */

        /** prvo definiram element nad kojim želim izvršiti neku akciju
         # jer koristim id, . za klasu, '[]'atribut
         */
        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");
        /**definiram akcije koje želim */
        await usernameInput.setValue("kiki");
        await passwordInput.setValue("1234");
        /**pauza da provjerim jesam sve dobro napravila */

        const loginButton = await $("#login-button");
        await loginButton.click();

        const errorLabel = await $('[data-test="error"]')
        await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    it("Check log in with correct credentials", async () => {

        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");

        await usernameInput.setValue("problem_user");
        await passwordInput.setValue("secret_sauce");


        const loginButton = await $("#login-button");
        await loginButton.click();

        const heading = await $(".title");
        await expect(heading).toHaveText("PRODUCTS");
    });

    it("Check logout", async () => {

        const button = await $("#react-burger-menu-btn");
        await button.click();

        const logout = await $("#logout_sidebar_link");
        await logout.click(); 

        const login = await $(".login-box");
        await expect(login).toBeDisplayed();
    });
});