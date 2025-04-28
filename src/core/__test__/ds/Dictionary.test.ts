// 为Dictionary.ts文件编写测试用例
import { beforeEach, describe, expect, it } from 'vitest'
import { Dictionary } from '../../ds/Dictionary'

describe('Dictionary', () => {
  let dictionary: Dictionary<number>

  beforeEach(() => {
    dictionary = new Dictionary<number>()
  })

  it('should create an empty dictionary', () => {
    expect(dictionary.length).toBe(0)
    expect(dictionary.keys.length).toBe(0)
    expect(dictionary.values.length).toBe(0)
  })

  it('should insert a key-value pair', () => {
    dictionary.insert('key1', 1)
    expect(dictionary.length).toBe(1)
    expect(dictionary.keys.length).toBe(1)
    expect(dictionary.values.length).toBe(1)
    expect(dictionary.find('key1')).toBe(1)
    expect(dictionary.keys[0]).toBe('key1')
    expect(dictionary.values[0]).toBe(1)
  })

  it('should remove a key-value pair', () => {
    dictionary.insert('key1', 1)
    dictionary.remove('key1')
    expect(dictionary.length).toBe(0)
    expect(dictionary.keys.length).toBe(0)
    expect(dictionary.values.length).toBe(0)
    expect(dictionary.find('key1')).toBeUndefined()
  })

  it('should find a key-value pair', () => {
    dictionary.insert('key1', 1)
    expect(dictionary.find('key1')).toBe(1)
    expect(dictionary.find('key2')).toBeUndefined()
  })

  it('should check if a key exists', () => {
    dictionary.insert('key1', 1)
    expect(dictionary.contains('key1')).toBe(true)
    expect(dictionary.contains('key2')).toBe(false)
  })

  it('should convert to string', () => {
    dictionary.insert('key1', 1)
    expect(dictionary.toString()).toBe('{"key1":1}')
  })
})
