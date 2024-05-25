import {expect, test} from '@playwright/test';

test('Demo page has final demo', async ({page}) => {
  await page.goto('/');
  const container = page.locator('div[title="demo-video"]');
  await expect(container).toHaveAttribute('data-demo-is-final', 'true');
});

test('Blog page has embedded iframe container', async ({page}) => {
  await page.goto('/blog');
  const container = page.locator('div[title="blog-iframe-container"]');
  expect(container).toBeTruthy();
});

