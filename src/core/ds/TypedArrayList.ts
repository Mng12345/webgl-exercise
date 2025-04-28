export class TypedArrayList<T extends Uint16Array | Float32Array | Uint8Array> {
  private _array: T
  private _typedArrayConstructor: new (length: number) => T
  private _length: number
  private _capacity: number
  public capacityChangeCallback: ((arrayList: TypedArrayList<T>) => void) | null = null
  public constructor(typedArrayConstructor: new (length: number) => T, capacity = 8) {
    this._typedArrayConstructor = typedArrayConstructor
    if (capacity === 0) {
      this._capacity = 8
    } else {
      this._capacity = capacity
    }
    this._array = new typedArrayConstructor(this._capacity)
    this._length = 0
  }

  /**
   * push a number to the end of the array, and return the new length of the array.
   * @param num
   */
  public push(num: number): number {
    if (this._length >= this._capacity) {
      if (this._capacity > 0) {
        this._capacity += this._capacity
        if (this.capacityChangeCallback !== null) {
          this.capacityChangeCallback(this)
        }
      }
      const oldArray = this._array
      this._array = new this._typedArrayConstructor(this._capacity)
      this._array.set(oldArray)
    }
    this._array[this._length] = num
    this._length++
    return this._length
  }

  get length(): number {
    return this._length
  }

  get capacity(): number {
    return this._capacity
  }

  get typedArray(): T {
    return this._array
  }

  public subArray(start = 0, end = this.length): T {
    return this._array.subarray(start, end) as T
  }

  public slice(start = 0, end = this.length): T {
    return this._array.slice(start, end) as T
  }

  public clear(): void {
    this._length = 0
  }

  public at(index: number): number {
    if (index < 0 || index >= this._length) {
      throw new Error('Index out of range')
    }
    return this._array[index]
  }
}
