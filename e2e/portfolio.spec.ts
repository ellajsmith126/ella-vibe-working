import { test, expect } from '@playwright/test'

test.describe('Portfolio', () => {
  test('loads with hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ELLA SMITH')).toBeVisible()
    await expect(page.getByText('Ella Vibe Working')).toBeVisible()
  })

  test('displays all bento tiles', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('My AI Toolkit')).toBeVisible()
    await expect(page.getByText('Systems I Built')).toBeVisible()
    await expect(page.getByText('Before → After')).toBeVisible()
    await expect(page.getByText('See It In Action')).toBeVisible()
    await expect(page.getByText('Personal Life')).toBeVisible()
  })

  test('opens expanded view when tile is clicked', async ({ page }) => {
    await page.goto('/')
    await page.getByText('My AI Toolkit').click()
    await expect(page.getByText('Tools mastered')).toBeVisible()
    await expect(page.getByText('Claude Projects')).toBeVisible()
  })

  test('closes expanded view', async ({ page }) => {
    await page.goto('/')
    await page.getByText('My AI Toolkit').click()
    await expect(page.getByText('Tools mastered')).toBeVisible()
    await page.getByLabel('Close expanded view').click()
    await expect(page.getByText('Tools mastered')).not.toBeVisible()
  })

  test('toggles dark mode', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: /Switch to/i })
    await toggle.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })

  test('shows impact stats in expanded view', async ({ page }) => {
    await page.goto('/')
    await page.getByText('Before → After').click()
    await expect(page.getByText('AI Capability Understanding')).toBeVisible()
    await expect(page.getByText('Confidence improved massively in weeks')).toBeVisible()
  })
})
