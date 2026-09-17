import { expect, test } from '@playwright/test'

test('adds a task to the list', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel(/tasks/i).fill('Buy groceries')
  await page.getByRole('button', { name: /add/i }).click()

  await expect(page.getByText('Buy groceries')).toBeVisible()
  await expect(page.getByText(/1 tasks/i)).toBeVisible()
})

test('deletes a task', async ({ page }) => {
  await page.goto('/')

  await page.getByLabel(/tasks/i).fill('Walk the dog')
  await page.getByRole('button', { name: /add/i }).click()
  await page.getByRole('button', { name: /delete/i }).click()

  await expect(page.getByText('Walk the dog')).not.toBeVisible()
  await expect(page.getByText(/0 tasks/i)).toBeVisible()
})

test('clears all tasks', async ({ page }) => {
  await page.goto('/')

  for (const task of ['Task one', 'Task two']) {
    await page.getByLabel(/tasks/i).fill(task)
    await page.getByRole('button', { name: /add/i }).click()
  }

  await page.getByRole('button', { name: /clear all/i }).click()

  await expect(page.getByText('Task one')).not.toBeVisible()
  await expect(page.getByText('Task two')).not.toBeVisible()
})

test('navigates between pages via navbar', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: /about/i }).click()
  await expect(page).toHaveURL(/\/about/)

  await page.getByRole('link', { name: /contact/i }).click()
  await expect(page).toHaveURL(/\/contact/)
})
