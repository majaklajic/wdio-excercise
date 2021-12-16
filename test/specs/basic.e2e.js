<<<<<<< Updated upstream
describe('Open Wdio Website', () => {
    it('Proper title is displayed', () => {
        browser.url('https://webdriver.io/');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
})
=======
// describe ("Shoutem pricing stranica", () => {
//     it('Testiranje h1', async () => {
//         await browser.url('https://shoutem.com/pricing/');
//         const h1 = await $('h1');
//         await expect(h1).toHaveText('There are more ways to create apps with Shoutem');

//     })

//     it ('Otvaranje Social Network i klikanje gumba', async() => {
//         await browser.url('https://shoutem.com/apps/social-network/');
//         const button = await $('.btn=Build now');
//         await button.click();
//         const header = await $('h1');
//         await expect(header).toHaveText('Choose an app template');
//     })
//})

describe ("Open MRS website", () => {
    it ('Login with incorrect credentials', async () => { await browser.url("https://demo.openmrs.org/openmrs/login.htm");

    const usernameInputField = await $("#username");
    //# ide dok je ID, . dok je klasa, ništa dok je element. kad imamo ID to nam je najsigurnije
    const passwordInputField = await $("#password");
    const pharmacyButton = await $("#Pharmacy");
    const loginButton = await $("#loginButton");

    await usernameInputField.addValue("kdak");
    await passwordInputField.addValue("fkao");
    await pharmacyButton.click();
    await loginButton.click();

    const errorMessage = await $("#error-message");
    await expect(errorMessage).toHaveText("Invalid username/password. Please try again.");

    await browser.pause(3000);

    })

    it ('Login with correct credentials', async () => { await browser.url("https://demo.openmrs.org/openmrs/login.htm");

    const usernameInputField = await $("#username");
    //# ide dok je ID, . dok je klasa, ništa dok je element. kad imamo ID to nam je najsigurnije
    const passwordInputField = await $("#password");
    const pharmacyButton = await $("#Pharmacy");
    const loginButton = await $("#loginButton");

    await usernameInputField.addValue("Admin");
    await passwordInputField.addValue("Admin123");
    await pharmacyButton.click();
    await loginButton.click();

    const loginMessage = await $("h4");
    await expect(loginMessage).toHaveText("Logged in as Super User (admin) at Pharmacy.");

    await browser.pause(3000);

    })

    it ('Logout', async () => { await browser.url("https://demo.openmrs.org/openmrs/login.htm");


    browser.setWindowSize(1500,1500);
    const logoutButton = await $("a=Logout");
    await logoutButton.click();

    const logoutSucessful = await $("#cantLogin");
    
    await browser.pause(3000);

    })

})
>>>>>>> Stashed changes
