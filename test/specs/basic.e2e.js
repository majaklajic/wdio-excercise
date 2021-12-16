 //describe('Shoutem website', () => {
 //   it('Shoutem header', async () => {
 //     await  browser.url('https://shoutem.com/pricing/');
  //      const hed = await $('h1');
  //      await  expect(hed).toHaveText('There are more ways to create apps with Shoutem');
   //   })
  // })


 // describe('Shoutem buttoni', () => {
 // it('Shoutem media page', async () => {

 // await browser.url('https://shoutem.com/apps/social-network/');
 // const btn = await $('a=Build now');
 // await btn.click();
 // const temp = await $('.page-title');
 // await expect(temp).toHaveText('Choose an app template');
//})})

describe('Krivi login', () => {
  it('krivi login', async () => {
 await browser.url('https://demo.openmrs.org/openmrs/referenceapplication/login.page');
 const un = await $('#username');
 const pass = await $('#password');
 const loc = await $('#Pharmacy');
 const log= await $('#loginButton');

 await un.setValue('aa');
 await pass.setValue('aa');
 await loc.click();
 await log.click();

const red = await $('#error-message');

await expect(red).toHaveText('Invalid username/password. Please try again.');

  })
})

describe('Ispravan login', () => {
  it('ispravan login', async () => {
 await browser.url('https://demo.openmrs.org/openmrs/referenceapplication/login.page');
 const un = await $('#username');
 const pass = await $('#password');
 const loc = await $('#Pharmacy');
 const log= await $('#loginButton');

 await un.setValue('Admin');
 await pass.setValue('Admin123');
 await loc.click();
 await log.click();

const go = await $('h4');

await expect(go);

  })
})
 
describe('Ispravan login 2', () => {
  it('ispravan login 2', async () => {
 await browser.url('https://demo.openmrs.org/openmrs/referenceapplication/login.page');
 const un = await $('#username');
 const pass = await $('#password');
 const loc = await $('#Pharmacy');
 const log= await $('#loginButton');

 await un.setValue('Admin');
 await pass.setValue('Admin123');
 await loc.click();
 await log.click();

 await browser.setWindowSize(1500, 1500);
 browser.pause(30000);
 
const out = await $('a=Logout');


await out.click();
await expect(log).toBePresent();

browser.pause(3000);

  })
})

