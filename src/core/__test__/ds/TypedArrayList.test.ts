import { describe, expect, it, vitest } from 'vitest'
import { TypedArrayList } from '../../ds/TypedArrayList'

// 为TypedArrayList测试用例编写测试套件
describe('TypedArrayList', () => {
  // 测试TypedArrayList的构造函数
  describe('constructor', () => {
    it('should create a TypedArrayList with the given capacity', () => {
      const typedArrayList = new TypedArrayList(Uint16Array, 16)
      expect(typedArrayList.capacity).toBe(16)
      expect(typedArrayList.length).toBe(0)
    })

    it('should create a TypedArrayList with the default capacity if no capacity is given', () => {
      const typedArrayList = new TypedArrayList(Float32Array)
      expect(typedArrayList.length).toBe(0)
      expect(typedArrayList.capacity).toBe(8)
    })

    it('should create a TypedArrayList with the default capacity if 0 is given as capacity', () => {
      const typedArrayList = new TypedArrayList(Uint8Array, 0)
      expect(typedArrayList.length).toBe(0)
      expect(typedArrayList.capacity).toBe(8)
    })
  })

  // 测试TypedArrayList的push方法
  describe('push', () => {
    it('should add the given number to the end of the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.push(3)
      expect(typedArrayList.typedArray).toEqual(new Float32Array([1, 2, 3, 0]))
    })

    it('should increase the capacity of the TypedArrayList if the length is equal to the capacity', () => {
      const typedArrayList = new TypedArrayList(Uint16Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.push(3)
      typedArrayList.push(4)
      typedArrayList.push(5)
      expect(typedArrayList.typedArray).toEqual(new Uint16Array([1, 2, 3, 4, 5, 0, 0, 0]))
    })
  })

  // 测试TypedArrayList的length属性
  describe('length', () => {
    it('should return the number of elements in the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      expect(typedArrayList.length).toBe(2)
    })
  })

  // 测试TypedArrayList的capacity属性
  describe('capacity', () => {
    it('should return the capacity of the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      expect(typedArrayList.capacity).toBe(4)
    })
  })

  // 测试TypedArrayList的typedArray属性
  describe('typedArray', () => {
    it('should return the underlying TypedArray of the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      expect(typedArrayList.typedArray).toEqual(new Float32Array([1, 2, 0, 0]))
    })
  })

  // 测试TypedArrayList的subArray方法
  describe('subArray', () => {
    it('should return a subarray of the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.push(3)
      expect(typedArrayList.subArray(1, 3)).toEqual(new Float32Array([2, 3]))
    })
  })

  // 测试TypedArrayList的slice方法
  describe('slice', () => {
    it('should return a slice of the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.push(3)
      expect(typedArrayList.slice(1, 3)).toEqual(new Float32Array([2, 3]))
    })
  })

  // 测试TypedArrayList的clear方法
  describe('clear', () => {
    it('should clear the TypedArrayList', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.clear()
      expect(typedArrayList.typedArray).toEqual(new Float32Array([1, 2, 0, 0]))
      expect(typedArrayList.length).toBe(0)
    })
  })

  // 测试TypedArrayList的at方法
  describe('at', () => {
    it('should return the element at the given index', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.push(1)
      typedArrayList.push(2)
      expect(typedArrayList.at(1)).toBe(2)
    })
  })

  // 测试TypedArrayList的capacityChangeCallback属性
  describe('capacityChangeCallback', () => {
    it('should be null by default', () => {
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      expect(typedArrayList.capacityChangeCallback).toBe(null)
    })

    // 测试capacityChangeCallback的触发
    it('should trigger the callback when the capacity of the TypedArrayList changes', () => {
      const callback = vitest.fn((arrayList: TypedArrayList<Float32Array>) => {
        return arrayList
      })
      const typedArrayList = new TypedArrayList(Float32Array, 4)
      typedArrayList.capacityChangeCallback = callback
      typedArrayList.push(1)
      typedArrayList.push(2)
      typedArrayList.push(3)
      typedArrayList.push(4)
      typedArrayList.push(5)
      expect(callback).toHaveBeenCalled()
    })
  })
})
