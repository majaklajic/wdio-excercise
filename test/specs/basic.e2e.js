describe('shoutem pricing lista', () => {
    it('postoji li h1 element', async () => {
        await browser.url('https://shoutem.com/pricing/');

        const h1 = $('h1');

        await expect(h1).toHaveText('There are more ways to create apps with Shoutem');




    })
});


describe('button', () => {
    it('je li klikabilan i otvara li se nova stranica heheheheheheheh', async () => {


        await browser.url('https://shoutem.com/apps/social-network/');

        const buildnow = await $('a=Build now');
        await buildnow.click();

        const link = await $('.page-title');

        await expect(link).toHaveText('Choose an app template');



    })
})
