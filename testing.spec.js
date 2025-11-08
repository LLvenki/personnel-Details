import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
      await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home")
      const Wind = await page.locator('//*[@id="menu"]/div[2]/ul/li[1]/a');
      const mac = await page.locator('//*[@id="menu"]/div[2]/ul/li[1]/div/div/ul/li[1]/a')
      await Wind.hover();
      await mac.hover();
      await page.waitForTimeout(5000)

  }
 
);
test('tes', async ({ page }) =>{

    await page.goto("https://demo.automationtesting.in/Static.html");
  const img1 =  await page.locator('//*[@id="angular"]');
  const place = await page.locator('//*[@id="droparea"]');
  await img1.dragTo(place)

})
