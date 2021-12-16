//describe('Shoutem test', () => {
 //   it('Shoutem pircin page naslov', async () => {
  //     await browser.url('https://shoutem.com/pricing/');
 //       const naslov = await $('h1');
   //     await expect(naslov).toHaveText('There are more ways to create apps with Shoutem');
        
  //  });

//   it('Shoutem social network landing page', async () => {
 //       await browser.url('https://shoutem.com/apps/social-network/');
  //      const button = await $('.btn=Build now');
   //     await button.click();
 //       const text = await $('.page-title');
  //      await expect(text).toHaveText('Choose an app template');

         
         
  //   });
 

//})


describe('Openmrs test', () => {
    it('Openmrs login error', async () => {
        await browser.url('https://demo.openmrs.org/openmrs/login.htm');
        browser.setWindowSize(1500, 1500)
        let inputUsername = await $('#username')
        await inputUsername.addValue('dfhidofihd')
        let inputPassword = await $('#password')
        await inputPassword.addValue('dfhidofihd')
        let pharmacy = await $('#Pharmacy')
        await pharmacy.click()
        let login = await $('#loginButton')
        await login.click()
        let error = await $('#error-message');
        await expect(error).toHaveText('Invalid username/password. Please try again.');
        
        
    });

    
    it('Openmrs login valja', async () => {
        await browser.url('https://demo.openmrs.org/openmrs/login.htm');
        browser.setWindowSize(1500, 1500)
        let inputUsername = await $('#username')
        await inputUsername.addValue('Admin')
        let inputPassword = await $('#password')
        await inputPassword.addValue('Admin123')
        let pharmacy = await $('#Pharmacy')
        await pharmacy.click()
        let login = await $('#loginButton')
        await login.click()
        browser.url('https://demo.openmrs.org/openmrs/referenceapplication/home.page')
        await expect(browser).toHaveUrl('https://demo.openmrs.org/openmrs/referenceapplication/home.page')
        
        const link = await $('a=Logout')

       await link.click()

    


        browser.url('https://demo.openmrs.org/openmrs/login.htm')
        await expect(browser).toHaveUrl('https://demo.openmrs.org/openmrs/login.htm')
        
    });


  


  

    
})
