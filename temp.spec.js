const { test, expect } = require('@playwright/test');

const axios = require('axios');



let genericProjectName = 'Test Step 2' + new Date().getMinutes() + new Date().getSeconds() + new Date().getMilliseconds();


test.beforeAll(async () => {

    await dbClonerService.clone();

});





test.beforeEach(async ({ page }) => {

    
});



test('Master Pentester User Creacte Project test after Login', async ({ page }) => {

    // Clicking CREATE PROJECT button

    await page.locator('button:has-text("CREATE PROJECT")').click();



    // Inserting Project Name

    await page.locator('[placeholder="Insert Project Name"]').fill(genericProjectName);



    // Dropbox Menu List

    let listElements = await page.$$("//div[@class=' css-g1d714-ValueContainer']");



    // Clicking Select Customer

    await listElements[0].click();

    await page.locator('#react-select-2-option-3').click();



    // Clicking Test Type

    await listElements[1].click();

    await page.locator('#react-select-3-option-2').click();



    // Clicking Start Date Picker

    await page.waitForSelector('div[role="combobox"]:has-text("Select Start Date")');

    await page.locator('div[role="combobox"]:has-text("Select Start Date")').click();



    // Clicking Today Button

    await page.focus("//button[contains(text(),'Yesterday')]");

    await page.locator("//button[contains(text(),'Yesterday')]").click();



    // Clicking End Date Date Picker

    await page.waitForSelector('div[role="combobox"]:has-text("Select End Date")');

    await page.locator('div[role="combobox"]:has-text("Select End Date")').click();



    // Clicking Today Button

    await page.focus("//button[contains(text(),'Today')]");

    await page.locator("//button[contains(text(),'Today')]").click();



    // Clicking Target Type

    await listElements[2].click();

    await page.locator('#react-select-4-option-2').click();



    // Clicking Offensive Security Guide Target Type

    await listElements[3].click();

    await page.locator('#react-select-5-option-2').click();



    // Inserting Target Value Address

    await page.waitForSelector('[placeholder="Insert Target Value Address"]');

    await page.locator('[placeholder="Insert Target Value Address"]').fill('https://www.google.com');

    await page.locator('text=Create ProjectProject NameSelect CustomerTest User Customer 1Test TypeWhite boxS >> button').first().click();



    await expect(page.locator('//div//strong[contains(text(),"Value")]')).toHaveText('Value')





    // Clicking Create Project Button

    const createButton = await page.locator('button:has-text("Create Project")');

    await createButton.waitFor(2000)

    await createButton.click();





    // Expecting Succesfull Message

    await expect(page.locator("//div[@class='rs-message-body']")).toHaveText('Project Created Succesfully')



    // Expecting Created Project Name

    await page.waitForSelector("//table//tbody//td[2]");

    await expect(page.locator("//table//tbody//td[2]")).toHaveText(genericProjectName);

});