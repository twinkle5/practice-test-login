const { test, expect} = require("@playwright/test")
const LoginPage=require("../pages/loginPage")

test('Login to practiceTest', async ({ page }) =>
{

await page.goto(process.env.BASE_URL);
console.log(process.env.BASE_URL);
await page.waitForTimeout(300)

//Login
const loginPage= new LoginPage(page) 
await loginPage.loginToApplication();
await loginPage.selectLogout();
await page.waitForTimeout(300)


});
