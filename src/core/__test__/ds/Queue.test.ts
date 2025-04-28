// 为Queue编写测试用例
import { beforeEach, describe, expect, it } from 'vitest'
import { Queue } from '../../ds/Queue'

describe('Queue', () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue<number>()
  })

  it('should add elements to the queue', () => {
    queue.add(1)
    queue.add(2)
    queue.add(3)
    expect(queue.length).toBe(3)
  })

  it('should remove elements from the queue', () => {
    queue.add(1)
    queue.add(2) // 1
    queue.add(3) // 2
    queue.add(4) // 3
    queue.add(5) // 4
    expect(queue.remove()).toBe(1)
    expect(queue.remove()).toBe(2)
    expect(queue.remove()).toBe(3)
    expect(queue.remove()).toBe(4)
    expect(queue.remove()).toBe(5)
    expect(queue.length).toBe(0)
  })
})
