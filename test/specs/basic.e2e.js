describe('Open Anita Kontrec Website', () => {
    it('Proper title is displayed', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/');
        const title = await $('h1');
    })

    it('Artworks menu button', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/');
        const myButton = await $('a=Artworks');
        await myButton.click();
        const elem = await $('.footer-widgets-outer-wrapper');
        await elem.scrollIntoView();
        await browser.pause(3000);
    })

    it('Artworks hrvatski jezik (Radovi)', async () => {
        browser.setWindowSize(1500, 1500);
        await browser.url('https://www.anita-kontrec.com/artworks');
        const myButton = await $('[alt="Hrvatski"]');
        await myButton.click();
        const elem = await $('h1=Radovi');
        await elem.isExisting();
        await browser.pause(3000);
    });

    it('Publikacije menu button', async () => {
        const myButton = await $('a=Publikacije');
        await myButton.click();
        const elem = await $('.wp-block-button__link=PUBLIkacije');
        await elem.scrollIntoView();
        await elem.isExisting();
        await browser.pause(3000);
    });

    it('Opening Image Gallery View opening - O meni', async () => {
        const myButton = await $('a=o meni');
        await myButton.click();
        await browser.pause(3000);

        const button2 = await $('.fancybox');
        await button2.click();

        const elem = await $('.fancybox-img');
        await elem.isExisting();
    });


})
