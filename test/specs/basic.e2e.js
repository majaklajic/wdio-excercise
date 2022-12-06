describe('Shoutem Web', async () => {
    /*it("Check if Shoutem Pricing page is loading", async () => {

       await browser.url("There are more ways to create apps with Shoutem");
       
       const heading = await $("h1");
       await expect(heading).toHaveText("There are more ways to create apps with Shoutem");

    });*/


    it("test social template page", async () => {

        await browser.url("https://shoutem.com/apps/social-network/");
        
        const button = await $("a=Build now");
        await browser.pause(3000);
        await button.click();

        const header = await $("h1");
        await expect(header).toHaveText("Choose an app template");
    });



})
