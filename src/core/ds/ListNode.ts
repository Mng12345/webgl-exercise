export class ListNode<T> {
  public next: ListNode<T> | null
  public prev: ListNode<T> | null
  public data: T | undefined
  public constructor(data: T | undefined) {
    this.next = null
    this.prev = null
    this.data = data
  }
}