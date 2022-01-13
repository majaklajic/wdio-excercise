describe('Open Anita Kontrec Website', () => {
    it('Proper title is displayed', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/');

        const title = await $('h1');

        await expect(title).toHaveText('Anita Kontrec');
    })

    it('Artworks', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/');
        const myButton = await $('a=Artworks');
        await myButton.click();
        const elem = await $('.footer-widgets-outer-wrapper');
        await elem.scrollIntoView();
        await browser.pause(3000);
    })

    it('Artworks', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/artworks');
        const myButton = await $('alt=Hrvatski');
        await myButton.click();
        const elem = await $('h1');
        await elem.isExisting();
    })

})
