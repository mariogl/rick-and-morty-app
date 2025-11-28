import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows page title", async ({ page }) => {
  const pageTitle = await page.getByText(/rick&morty app/i);

  await expect(pageTitle).toBeVisible();
});

test("shows a chosen character's details", async ({ page }) => {
  const characterName = "Alien Googah";

  const cardTitle = await page.getByRole("heading", { name: characterName });

  await cardTitle.click();

  const image = await page.getByAltText(characterName);

  await expect(image).toBeVisible();
});

test("filters characters by name", async ({ page }) => {
  const searchInput = await page.getByLabel(/search/i);

  await searchInput.fill("Smith");

  const abradolfName = await page.getByRole("heading", {
    name: "Abradolf Lincler",
  });

  await expect(abradolfName).not.toBeVisible();

  const jerryName = await page
    .getByRole("heading", {
      name: "Jerry Smith",
    })
    .first();

  await expect(jerryName).toBeVisible();
});

test("sorts characters by status", async ({ page }) => {
  const sortDropdown = await page.getByLabel(/sort characters by/i);

  await sortDropdown.selectOption("status (Z-A)");

  const names = await page.getByRole("heading", {
    level: 2,
  });

  await expect(names.first()).toHaveText("Abradolf Lincler");
});
