import { AdapterBase } from './AdapterBase'
import { List } from './List'

export class Queue<T> extends AdapterBase<T> {
  public remove(): T | undefined {
    if (this._arr instanceof List) {
      return this._arr.popFront()
    } else {
      return this._arr.shift()
    }
  }
}
