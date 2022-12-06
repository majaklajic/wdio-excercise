describe("Shoutem web", async () => {

     /* it("Check if Shoutem Pricing page is loading", async () => {
        await browser.url("https://shoutem.com/pricing/");

        const heading = await $("h1");
        await expect(heading).toHaveText("There are more ways to create apps with Shoutem")
    });  */
    
    it("Check if Template App page contains text 'Choose an App template'", async() => {
        await browser.url("https://shoutem.com/apps/social-network/");

        const btn = await $('a=BUILD NOW');
        await btn.click();

        const heading = await $("h1");
        await expect(heading).toHaveText("Choose an app template")
    });

});
