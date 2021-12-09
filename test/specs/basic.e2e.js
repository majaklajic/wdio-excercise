describe ("Shoutem pricing stranica", () => {
    it('Testiranje h1', async () => {
        await browser.url('https://shoutem.com/pricing/');
        const h1 = await $('h1');
        await expect(h1).toHaveText('There are more ways to create apps with Shoutem');

    })

    it ('Otvaranje Social Network i klikanje gumba', async() => {
        await browser.url('https://shoutem.com/apps/social-network/');
        const button = await $('.btn=Build now');
        await button.click()
        const header = await $('h1')
        await expect(header).toHaveText('Choose an app template')


        
   
    })


})