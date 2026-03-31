import { test, expect } from '@playwright/test'

test.describe('Portfolio', () => {
  test('loads with hero and default tools tab', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText("Ella's AI System,")).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Tools & Stack' })).toHaveAttribute('aria-selected', 'true')
  })

  test('navigates between tabs', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('tab', { name: 'Impact' }).click()
    await expect(page.getByText('Before').first()).toBeVisible()

    await page.getByRole('tab', { name: 'Personal Life' }).click()
    await expect(page.getByText('nobody asked me to do this')).toBeVisible()
  })

  test('syncs tab with URL', async ({ page }) => {
    await page.goto('/?tab=impact')
    await expect(page.getByRole('tab', { name: 'Impact' })).toHaveAttribute('aria-selected', 'true')
  })

  test('toggles dark mode', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: /Switch to dark mode/i })
    await toggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('expands workflow card', async ({ page }) => {
    await page.goto('/?tab=workflows')
    const expandButton = page.getByRole('button', { name: /View full output/i }).first()
    await expandButton.click()
    await expect(page.getByRole('button', { name: /Hide full output/i }).first()).toBeVisible()
  })
})
