describe('SwagLabs Demo Website', () => {

     it("Log in with incorrect credentials", async() => {
    
     await browser.url("https://www.saucedemo.com/");
    
    //definiranje vrijednosti 
    
    const usernameInput = await $("#user-name");
     const passwordInput = await $("#password");
    
   //unos u fieldove
    await usernameInput.setValue("jhjggf");
 await passwordInput.setValue("gfghdfghdfh");
    
 
   //klik na log in 
 const loginButton = await $("#login-button");
  loginButton.click();
    
  //dohvatit selektor od error poruke; zatvorit test sa expectom
 const errorLabel = await $('[data-test="error"]');
await expect(errorLabel).toHaveText("Epic sadface: Username and password do not match any user in this service");
  
    
 });
    
    
    
    
  it("Log in with correct credentials", async() => {
    
 //definiranje vrijednosti 
    
 const usernameInput = await $("#user-name");
 const passwordInput = await $("#password");
    
 //unos u fieldove
 await usernameInput.setValue("standard_user");
  await passwordInput.setValue("secret_sauce");
    
 const loginButton = await $("#login-button");
 loginButton.click();
    
    });
    
    it("Logout", async () => {
    const menuButton  = await $("#react-burger-menu-btn");
 menuButton.click();
 
 const logoutButton = await $("#logout_sidebar_link");
  logoutButton.click();
    
 const login = await $(".login-box");
 await expect(login).toBeDisplayed();
    
 });
    
    });
    
    