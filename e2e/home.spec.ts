import { test, expect } from '@playwright/test'

// E2E 테스트 예시
test.describe('홈 페이지', () => {
  test('홈 페이지가 정상적으로 로드된다', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/')
  })
})
