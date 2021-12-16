
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
