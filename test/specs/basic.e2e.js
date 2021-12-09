describe('Shoutem website', () => {
    it('Shoutem header', async () => {
      await  browser.url('https://shoutem.com/pricing/');
      const hed = await $('h1');
      await  expect(hed).toHaveText('There are more ways to create apps with Shoutem');
    })
})
