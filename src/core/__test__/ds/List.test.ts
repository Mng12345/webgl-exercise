// 编写List.ts测试用例
import { beforeEach, describe, expect, it } from 'vitest'
import { List } from '../../ds/List'

describe('List', () => {
  let list: List<number>

  beforeEach(() => {
    list = new List<number>()
  })

  it('should be empty', () => {
    expect(list.empty()).toBe(true)
  })

  it('should have length 0', () => {
    expect(list.length).toBe(0)
  })

  it('should insert before head', () => {
    list.push(1)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(1)
    expect(list.begin().data).toBe(1)
  })

  it('should insert before tail', () => {
    list.insertBefore(list.end(), 1)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(1)
    expect(list.end().prev?.data).toBe(1)
  })

  it('should insert before middle', () => {
    list.push(1)
    list.push(2)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(2)
    expect(list.begin().next?.data).toBe(2)
  })

  it('should remove head', () => {
    list.push(1)
    list.remove(list.begin())
    expect(list.empty()).toBe(true)
    expect(list.length).toBe(0)
  })

  it('should remove tail', () => {
    list.push(1)
    list.pop()
    expect(list.empty()).toBe(true)
    expect(list.length).toBe(0)
  })

  it('should remove middle', () => {
    list.push(1)
    list.push(2)
    const node = list.begin().next
    if (node !== null) {
      list.remove(node)
    }
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(1)
    expect(list.begin().data).toBe(1)
  })

  it('should push front', () => {
    list.push(2)
    list.pushFront(1)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(2)
    expect(list.begin().data).toBe(1)
  })

  it('should pop front', () => {
    list.push(2)
    list.pushFront(1)
    expect(list.popFront()).toBe(1)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(1)
  })

  it('should push back', () => {
    list.push(1)
    expect(list.empty()).toBe(false)
    expect(list.length).toBe(1)
    expect(list.end().prev?.data).toBe(1)
  })

  it('should pop back', () => {
    list.push(1)
    expect(list.pop()).toBe(1)
    expect(list.empty()).toBe(true)
    expect(list.length).toBe(0)
  })

  it('should contain', () => {
    list.push(1)
    expect(list.contains(1)).toBe(true)
    expect(list.contains(2)).toBe(false)
  })

  it('should forNext', () => {
    list.push(1)
    list.push(2)
    list.push(3)
    const arr: number[] = []
    list.forNext((data) => {
      arr.push(data)
    })
    expect(arr).toEqual([1, 2, 3])
  })

  it('should forPrev', () => {
    list.push(1)
    list.push(2)
    list.push(3)
    const arr: number[] = []
    list.forPrev((data) => {
      arr.push(data)
    })
    expect(arr).toEqual([3, 2, 1])
  })
})
