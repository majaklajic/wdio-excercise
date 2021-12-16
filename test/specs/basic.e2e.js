describe('OpenMRS', () => {

    /*
    Napisati sljedeće automatske testove: 
    
    Pokušaj logiranja s krivim pristupnim podacima (verificirati da se ispravan error ispisuje) 
    
    Pokušaj logiranja s ispravnim pristupnim podacima (verificirati da je login prošao)
    
    Logout (verificirati da je korisnik odlogiran i da je na početnom screenu) 
    */
    
        it('Login with INCORRECT credentials', async () => {
            browser.url('https://demo.openmrs.org/openmrs/login.htm');
    
            //Za pokretanje: npm install i nakon toga npm run test
    
            // DEFINIRANJE KORIŠTENIH ELEMENATA
            const usernameInput = await $('#username');
            const passwordInput = await $('#password');
            const pharmacyButton = await $('#Pharmacy');
            const loginButton = await $('#loginButton');
    
            // UPIS KRIVIH PRISTUPNIH PODATAKA
            await usernameInput.addValue('lfadjkf');
            await passwordInput.addValue('mxcbnmshsf');
    
            // ODABIR PHARMACY jer je obavezno nešto odabrati
            await pharmacyButton.click();
    
            // KLIK NA LOG IN DUGME
            await loginButton.click();
    
            // ODGODA DA MOŽEMO PRATITI KAKO RADI
            //await browser.pause(3000);
    
            // OČEKIVANA ERROR PORUKA NAKON KRIVOG UNOSA
            const errorMessage = await $('#error-message');
            await expect(errorMessage).toHaveText ('Invalid username/password. Please try again.');
        });
    
        it('Login with CORRECT credentials', async () => {
            browser.url('https://demo.openmrs.org/openmrs/login.htm');
    
    
            const usernameInput = await $('#username');
            const passwordInput = await $('#password');
            const pharmacyButton = await $('#Pharmacy');
            const loginButton = await $('#loginButton');
    
            await usernameInput.addValue('Admin');
            await passwordInput.addValue('Admin123');
    
            await pharmacyButton.click();
    
            await loginButton.click();
    
            //await browser.pause(3000);
    
            // OČEKIVANA PORUKA NAKON TOČNOG UNOSA
            const h4 = await $('h4');
            await expect(h4).toHaveText ('Logged in as Super User (admin) at Pharmacy.');
        });
    
        
        it('Logout', async () => {
            browser.setWindowSize (1500,1500);
            const logoutButton = await $('a=Logout');
            await logoutButton.click();
            const loginButton = await $('#loginButton');
        });
    })
    
    
    