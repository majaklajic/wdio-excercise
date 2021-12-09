describe('Shoutem Pricing Web Stranica', () => {
    it('Ucitavanje pocetne stranice', async () => {
        await browser.url('https://shoutem.com/pricing/');
        const h1 = await $('h1');
        await expect(h1).toHaveText('There are more ways to create apps with Shoutem');
    })



    it('Ucitavanje Social Network pocetne stranice', async () => {
        await browser.url('https://shoutem.com/apps/social-network/');
        const button = await $('.btn=Build now');
        await button.click()
        const h1 = await $('h1')
        await expect(h1).toHaveText('Choose an app template')
    })
})
