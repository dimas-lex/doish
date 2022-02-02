import { test, expect, Page } from "@playwright/test";
import dayjs from "dayjs";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

const newItem = {
  id: "1",
  title: "Task Title",
  description: "Some description",
  isDone: false,
  isPostpone: false
};


test.describe("New Todo", () => {

  test("should displays 0 todo items by default", async ({ page }) => {
    await expect(page.locator(".cy-task-list")).toBeVisible();
    const noItem = await page.locator(".cy-task-list__no-items");

    await expect(noItem).toBeVisible();
    await expect(noItem).toContainText("No tasks defined");
  });

  test("should be able to add new todo items", async ({ page }) => {
    await expect(page.locator(".cy-add-task")).toBeVisible();

    await page.click(".cy-add-task");
    const toDoTitle = await page.locator(".cy-dialog-box__title");

    await expect(toDoTitle).toBeVisible();
    await expect(toDoTitle).toContainText("New TO DO");

    await page.fill(".cy-task__title input", newItem.title);
    await page.fill(".cy-task__description input", newItem.description);
    await page.locator('#task-dueDate').waitFor({state: "visible"});

    await page.click(".cy-task__submit");

    await expect(page.locator(".cy-dialog-box")).toHaveCount(0);
    await expect(page.locator(".cy-task-list__item")).toHaveCount(1);
    const item = page.locator('.cy-task-list__item');

    await expect(item.locator('.cy-task-item__title')).toHaveText(newItem.title);
    await expect(item.locator('.cy-task-item__description')).toHaveText(newItem.description);
    await expect(item.locator('.cy-task-item__due-date')).toHaveText(dayjs().add(1, 'days').format("DD MMM YYYY"));

    await expect(await item.locator('.cy-task-item__postponed input').isChecked() ).toBeFalsy();

  });


  test("should be able to add new postponed todo item", async ({ page }) => {
    await expect(page.locator(".cy-add-task")).toBeVisible();

    await page.click(".cy-add-task");
    const toDoTitle = await page.locator(".cy-dialog-box__title");

    await expect(toDoTitle).toBeVisible();
    await expect(toDoTitle).toContainText("New TO DO");

    await page.fill(".cy-task__title input", newItem.title);
    await page.check('.cy-task__is-postponed input');

    await page.click(".cy-task__submit");

    await expect(page.locator(".cy-dialog-box")).toHaveCount(0);
    const item = page.locator('.cy-task-list__item');

    await expect(item).toHaveCount(1);
    await expect(item.locator('.cy-task-item__title')).toHaveText(newItem.title);
    await expect(await item.locator('.cy-task-item__postponed input').isChecked() ).toBeTruthy();
  });

  test("should be able to postponed todo items", async ({ page }) => {
    await expect(page.locator(".cy-add-task")).toBeVisible();

    await page.click(".cy-add-task");

    const toDoTitle = await page.locator(".cy-dialog-box__title");
    await expect(toDoTitle).toBeVisible();
    await expect(toDoTitle).toContainText("New TO DO");

    await page.fill(".cy-task__title input", newItem.title);
    await page.click(".cy-task__submit");

    await expect(page.locator(".cy-dialog-box")).toHaveCount(0);
    const item = page.locator('.cy-task-list__item');

    await expect(item).toHaveCount(1);
    await expect(item.locator('.cy-task-item__title')).toHaveText(newItem.title);

    await item.locator('.cy-task-item__postponed input').check();
    await expect(await item.locator('.cy-task-item__postponed input').isChecked() ).toBeTruthy();

  });

});

