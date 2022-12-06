describe("Shoutem web", async () => {

 /**   it("Check if Shoutem Pricing page is loading", async () =>{
        await browser.url("https://shoutem.com/pricing/");
        await browser.pause(5000);

        const heading = await $("h1");
        await expect(heading).toHaveText("There are more ways to create apps with Shoutem");

    });
*/ 
    it("Test Social template page", async () =>{
        await browser.url("https://shoutem.com/apps/social-network/");
        const btn = await $('a=BUILD NOW');
        await btn.click();

        const heading = await $("h1");
        await expect(heading).toHaveText("Choose an app template");

    });

});