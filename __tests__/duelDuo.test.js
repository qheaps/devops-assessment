const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000")
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  })

  test("draw button displays div choices", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
    await driver.wait(until.elementLocated(By.id(`choose-header`)), 3000)
    expect(await driver.findElement(By.id(`choices`)).isDisplayed()).toBe(true)
  })
  
  test("add duo button creates duo div", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
    await driver.wait(until.elementLocated(By.id(`choose-header`)), 3000)
    await driver.findElement(By.className(`bot-btn`)).click()
    await driver.sleep(1000)
    expect(await driver.findElement(By.id(`player-duo`)).isDisplayed()).toBe(true)
  })
})
