import { ListNode } from './ListNode'

export class List<T> {
  private _headNode: ListNode<T>
  private _length: number
  public constructor() {
    this._headNode = new ListNode<T>(undefined)
    this._headNode.next = this._headNode
    this._headNode.prev = this._headNode
    this._length = 0
  }

  public empty(): boolean {
    return this._headNode.next === this._headNode
  }

  public get length(): number {
    return this._length
  }

  public begin(): ListNode<T> {
    if (this._headNode.next === this._headNode || this._headNode.next === null) {
      throw new Error('List is empty')
    }
    return this._headNode.next
  }

  public end(): ListNode<T> {
    return this._headNode
  }

  public contains(data: T, compareFn?: (a: T, b: T) => boolean): boolean {
    for (
      let link: ListNode<T> | null = this._headNode.next;
      link !== null && link !== this._headNode;
      link = link.next
    ) {
      if (compareFn === undefined) {
        if (link.data === data) {
          return true
        }
      } else {
        if (link.data !== undefined && compareFn(link.data, data)) {
          return true
        }
      }
    }
    return false
  }

  public forNext(cb: (data: T) => void): void {
    for (
      let link = this._headNode.next;
      link !== null && link !== this._headNode;
      link = link.next
    ) {
      if (link.data !== undefined) {
        cb(link.data)
      }
    }
  }

  public forPrev(cb: (data: T) => void): void {
    for (
      let link = this._headNode.prev;
      link !== null && link !== this._headNode;
      link = link.prev
    ) {
      if (link.data !== undefined) {
        cb(link.data)
      }
    }
  }

  public insertBefore(node: ListNode<T>, data: T): ListNode<T> {
    const ret: ListNode<T> = new ListNode<T>(data)
    ret.next = node
    ret.prev = node.prev
    if (node.prev !== null) {
      node.prev.next = ret
    }
    node.prev = ret
    this._length++
    return ret
  }

  public remove(node: ListNode<T>): void {
    if (node.prev !== null) {
      node.prev.next = node.next
    }
    if (node.next !== null) {
      node.next.prev = node.prev
    }
    this._length--
  }

  public push(data: T): void {
    this.insertBefore(this.end(), data)
  }

  public pop(): T | undefined {
    const prev = this.end().prev
    if (prev !== null) {
      const data = prev.data
      this.remove(prev)
      return data
    } else {
      return undefined
    }
  }

  public pushFront(data: T): void {
    this.insertBefore(this.begin(), data)
  }

  public popFront(): T | undefined {
    const begin = this.begin()
    if (begin !== null) {
      const data = begin.data
      this.remove(begin)
      return data
    } else {
      return undefined
    }
  }
}
