describe("Shoutem web", async () => {
 /**    it("Check if Shoutem Pricing page is loading", async () => {
        await browser.url("https://shoutem.com/pricing/");

        const heading = await $("h1");
        await expect(heading).toHaveText("There are more ways to create apps with Shoutem");
    });
*/

    it("Test Social template page", async () => {
        await browser.url("https://shoutem.com/apps/social-network/");

        const buildNowButton = await $("a=Build now"); //prvo nađem preko inspekta preko teksta na gumbu
        
        await buildNowButton.click(); //kliknem na gumb

        await browser.pause(5000); //pauza da vidim jesam sve dobro napravila dosad

      /**   const heading = await $("h1");
        await expect(heading).toHaveText("Choose an app template");  ILI */

        const heading = await $(".page-title");
        await expect(heading).toHaveText("Choose an app template");
    });
});
