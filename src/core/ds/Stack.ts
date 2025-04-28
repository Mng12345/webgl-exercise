import { AdapterBase } from './AdapterBase'
import { List } from './List'

export class Stack<T> extends AdapterBase<T> {
  public remove(): T | undefined {
    if (this._arr instanceof List) {
      return this._arr.pop()
    } else {
      return this._arr.pop()
    }
  }
}
