describe('Open Shoutem Website', () => {
    it('Proper title is displayed', async () => {
        await browser.url('https://shoutem.com/pricing/');

        const title = await $('h1');

        await expect(title).toHaveText('There are more ways to create apps with Shoutem');
    })

    it('Ssocial Network', async () => {
        await browser.url('https://shoutem.com/apps/social-network/');
        const myButton = await $('a=Build now');
        await myButton.click();
        const title = await $('h1');
        await expect(title).toHaveText('Choose an app template');
    })
})
