import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// 컴포넌트 유닛 테스트 예시
// 실제 컴포넌트 생성 후 import 경로를 수정하세요
describe('컴포넌트 테스트 예시', () => {
  it('텍스트가 올바르게 렌더링된다', () => {
    render(<div data-testid="example">안녕하세요</div>)
    expect(screen.getByTestId('example')).toHaveTextContent('안녕하세요')
  })
})
