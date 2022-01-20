describe('Sinsay Web stranica', () => {
    it('Ucitavanje pocetne stranice', async () => {
       await browser.url('https://www.sinsay.com/hr/hr/');
       const h2 = await $('h2');
       await expect(h2).toHaveText('Posebna ponuda');
    })

    it('Ucitavanje Kosarice', async () => {
        await browser.url('https://www.sinsay.com/hr/hr/');
        const button = await $('.action-btn__ActionBtn-zbpc1m-1.hQUyPy');
        await button.click();
        const h1 = await $('h1');
        await expect(h1).toHaveText('Vaša košarica je prazna');
    });

    it('Ucitavanje logina', async () => {
        await browser.url('https://www.sinsay.com/hr/hr/customer/account/login/#login');
        const h2 = await $('h2');
        await expect(h2).toHaveText('Jeste li korisnik?');
     });

     it ('Login with incorrect credentials', async  () => {
        browser.url("https://www.sinsay.com/hr/hr/customer/account/login/#login");

        const email = await $('[type="email"]');
        const password = await $('[type="password"]');
        const button = await $('.primary__PrimaryButtonComponent-sc-1pct4vx-0.fDECVK');

        await email.addValue('ddsjbcjs@gmail.com');
        await password.addValue('bjbfjs');
        await button.click();

        const errorMessage = await $('.sc-hKgJUU.cIhvx');
        await expect(errorMessage).toHaveText('Nevažeća prijava ili zaporka.');


    });


     it ('Login with correct credentials', async  () => {
        browser.url("https://www.sinsay.com/hr/hr/customer/account/login/#login");

        const email = await $('[type="email"]');
        const password = await $('[type="password"]');
        const button = await $('.primary__PrimaryButtonComponent-sc-1pct4vx-0.fDECVK');

        await email.addValue('monika17mp@gmail.com');
        await password.addValue('monika17');
        await button.click();

        const h2 = await $('h2');
        await expect(h2).toHaveText('Posebna ponuda');


    });



     
    
    



    
        
        



})
