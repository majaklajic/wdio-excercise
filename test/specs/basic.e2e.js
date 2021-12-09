describe('Shoutem website', () => {
    it('Shoutem header', async () => {
      await  browser.url('https://shoutem.com/pricing/');
      const hed = await $('h1');
      await  expect(hed).toHaveText('There are more ways to create apps with Shoutem');
    })
})


describe('Shoutem buttoni', () => {
it('Shoutem media page', async () => {

await browser.url('https://shoutem.com/apps/social-network/');
const btn = await $('a=Build now');
await btn.click();
const temp = await $('.page-title');
await expect(temp).toHaveText('Choose an app template');

})

})
