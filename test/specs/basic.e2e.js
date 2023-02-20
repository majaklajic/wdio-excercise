describe('Open Anita Kontrec Website', () => {
    it('Proper title is displayed', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/');
        const title = await $('h1');
        await expect(title).toBeDisplayed();
    })

    it('Artworks menu button', async () => {
        await browser.url('https://www.anita-kontrec.com/');
        const myButton = await $('a=Artworks');
        await myButton.click();
        const elem = await $('.footer-widgets-outer-wrapper');
        await elem.scrollIntoView();
    })

    it('Artworks hrvatski jezik (Radovi)', async () => {
        await browser.url('https://www.anita-kontrec.com/artworks');
        const myButton = await $('[alt="Hrvatski"]');
        await myButton.click();
        const elem = await $('h1=Radovi');
        await elem.isExisting();
    });

    it('Publikacije menu button', async () => {
        const myButton = await $('a=Publikacije');
        await myButton.click();
        const elem = await $('.wp-block-button__link=PUBLIkacije');
        await elem.scrollIntoView();
        await elem.isExisting();
    });

    it('Opening Image Gallery View opening - O meni', async () => {
        const myButton = await $('a=o meni');
        await myButton.click();

        const button2 = await $('.fancybox');
        await button2.click();

        const elem = await $('.fancybox-img');
        await elem.isExisting();
    });


})
