const { expect } = require('@playwright/test');
class LoginPage{

    constructor(page) {
        this.page = page;
        //this.username = page.locator('input[id="username"]');
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.submitButton = page.locator('#submit');
        this.logOutButton = page.getByText('Log out');
    }


    async loginToApplication(){
         await this.username.fill(process.env.USERNAME);
         await this.password.fill(process.env.PASSWORD)
         await this.submitButton.click()
         await this.page.waitForTimeout(100)
         await expect(this.page.getByText('Logged In Successfully', { exact: true })).toBeVisible();
        
     }

     async selectLogout(){
      
        await this.logOutButton.click()
 
     }



}
module.exports=LoginPage;