// @ts-check

const { test, expect } = require('@playwright/test');

const sleep = ms => new Promise(res => setTimeout(res, ms));

test('has title', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/vanilla-es6/#/');
  
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Vanilla ES6 • TodoMVC/);

    // Check "ECMAScript 6" title
    console.log('Check "ECMAScript 6" title')
    await expect(page.getByRole('heading', { name: 'ECMAScript 6' })).toBeVisible();

    // Check "Vanilla ES6 Example" title
    console.log('Check "Vanilla ES6 Example" title')
    await expect(page.getByRole('heading', { name: 'Vanilla ES6 Example' })).toBeVisible();

    // Check "Vanilla ES6 Example" title
    console.log('Check footer "ECMAScript 6"')

    await expect(await page.locator('//footer/a').textContent()).toBe('ECMAScript 6');

    // Check other footer "If you have other helpful links to share..."
    console.log('Check other footer "If you have other helpful links to share..."')

    await expect(await page.locator('//footer/em').textContent()).toBe('If you have other helpful links to share, or find any of the links above no longer work, please let us know.');
    
    // feed 100 random words into todo list
    console.log('feed 100 random words into todo list')

    const words = ['apple', 'banana', 'orange', 'strawberry', 'grape', 'watermelon'];

    for (let i = 0; i < 50; i++) {

        // await page.waitForSelector('[placeholder="What needs to be done?"]');
        await page.pause()
        // await sleep(1000);
        await page.getByPlaceholder('What needs to be done?').click();
        await page.getByPlaceholder('What needs to be done?').fill(words[i%6]);
        await page.getByPlaceholder('What needs to be done?').press('Enter');
        
    }

    console.log('Done feeding')

    // Check if the item count is correct
    console.log('Check if the item count is correct')
    var itemLeft = await page.locator('//span[@class="todo-count"]').textContent();
    await page.pause()
    var itemlogCount = parseInt(itemLeft);
    console.log(itemlogCount == 50)

  });

//   function getRandomWord() {
//     // create an array of words
//     const words = ['apple', 'banana', 'orange', 'strawberry', 'grape', 'watermelon'];
  
//     // get a random index from the array
//     const randomIndex = Math.floor(Math.random() * words.length);
  
//     // return the word at the random index
//     return words[randomIndex];
//   }
  
//   test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects the URL to contain intro.
//     await expect(page).toHaveURL(/.*intro/);
//   });