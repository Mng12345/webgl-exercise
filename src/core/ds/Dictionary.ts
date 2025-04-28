export class Dictionary<T> {
  private _items: { [key: string]: T } | Map<string, T>
  private _count: number
  public constructor(useES6Map: boolean = true) {
    if (useES6Map) {
      this._items = new Map()
    } else {
      this._items = {}
    }
    this._count = 0
  }

  public get length(): number {
    return this._count
  }

  public contains(key: string): boolean {
    if (this._items instanceof Map) {
      return this._items.has(key)
    } else {
      return this._items[key] !== undefined
    }
  }

  public find(key: string): T | undefined {
    if (this._items instanceof Map) {
      return this._items.get(key)
    } else {
      return this._items[key]
    }
  }

  public insert(key: string, value: T): void {
    if (this._items instanceof Map) {
      this._items.set(key, value)
    } else {
      this._items[key] = value
    }
    this._count++
  }

  public remove(key: string): boolean {
    const result = this.find(key)
    if (result === undefined) {
      return false
    }
    if (this._items instanceof Map) {
      this._items.delete(key)
    } else {
      delete this._items[key]
    }
    this._count--
    return true
  }

  public get keys(): string[] {
    const keys: string[] = []
    if (this._items instanceof Map) {
      for (const key of this._items.keys()) {
        keys.push(key)
      }
    } else {
      for (const key in this._items) {
        if (this._items.hasOwnProperty(key)) {
          keys.push(key)
        }
      }
    }
    return keys
  }

  public get values(): T[] {
    const values: T[] = []
    if (this._items instanceof Map) {
      for (const value of this._items.values()) {
        values.push(value)
      }
    } else {
      for (const key in this._items) {
        if (this._items.hasOwnProperty(key)) {
          values.push(this._items[key])
        }
      }
    }
    return values
  }

  public toString(): string {
    if (this._items instanceof Map) {
      const obj: { [key: string]: T } = {}
      for (const [key, value] of this._items) {
        obj[key] = value
      }
      return JSON.stringify(obj)
    }
    return JSON.stringify(this._items)
  }
}
