/*
describe('Log in', () => {
    it('Proper title is displayed', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $("#user-name").addValue("tpapucic");
        await $("#password").addValue("fsfsd");

        await $('[type="submit"]').click(); 
        const text = await $("h3");
        await expect(text).toHaveText("Epic sadface: Username and password do not match any user in this service");

    })
})
*/
/*
describe('Log in Successfully', () => {
    it('Logged in successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $("#user-name").addValue("standard_user");
        await $("#password").addValue("secret_sauce");

        await $('[type="submit"]').click(); 
        const heading = await $("span.title");
        await expect(heading).toHaveText("PRODUCTS");

    })
})
*/

const usernames = ["standard_user", "problem_user", "locked_user"];


for (let i = 0; i < 1; i++) {
    const random = usernames[i];
describe('Log in Successfully and logout', () => {
    it('Logged in successfully and logout', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $("#user-name").addValue(random);
        await $("#password").addValue("secret_sauce");

        await $('[type="submit"]').click(); 
        const heading = await $("span.title");
        await expect(heading).toHaveText("PRODUCTS");

        await $("#react-burger-menu-btn").click(); 
        await $("#logout_sidebar_link").click(); 

        const submit = await $('[type="submit"]');
        await expect(submit).toHaveValue("Login");
    })
})
i++;
}
