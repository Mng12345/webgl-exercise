// 为Stack编写测试用例
import { beforeEach, describe, expect, it } from 'vitest'
import { Stack } from '../../ds/Stack'

describe('Stack', () => {
  let stack: Stack<number>

  beforeEach(() => {
    stack = new Stack<number>()
  })

  it('should add elements to stack', () => {
    stack.add(1)
    stack.add(2)
    stack.add(3)
    expect(stack.length).toBe(3)
  })

  it('should remove elements from stack', () => {
    stack.add(1)
    stack.add(2)
    stack.add(3)
    expect(stack.remove()).toBe(3)
    expect(stack.remove()).toBe(2)
    expect(stack.remove()).toBe(1)
  })

  it('should remove elements from stack', () => {
    stack.add(1)
    stack.add(2)
    stack.add(3)
    stack.remove()
    expect(stack.length).toBe(2)
    expect(stack.remove()).toBe(2)
    expect(stack.remove()).toBe(1)
    expect(stack.remove()).toBeUndefined()
  })
})
