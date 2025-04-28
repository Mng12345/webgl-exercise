import type { IAdapter } from './IAdapter'
import { List } from './List'

export abstract class AdapterBase<T> implements IAdapter<T> {
  protected _arr: Array<T> | List<T>
  public constructor(useList = true) {
    if (useList) {
      this._arr = new List<T>()
    } else {
      this._arr = new Array<T>()
    }
  }
  public add(t: T): void {
    this._arr.push(t)
  }
  public abstract remove(): T | undefined
  public get length(): number {
    return this._arr.length
  }
  public get isEmpty(): boolean {
    return this._arr.length <= 0
  }
  clear(): void {
    if (this._arr instanceof List) {
      this._arr = new List<T>()
    } else {
      this._arr = new Array<T>()
    }
  }
}
