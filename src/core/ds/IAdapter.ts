export interface IAdapter<T> {
  add(t: T): void
  remove(): T | undefined
  isEmpty: boolean
  clear(): void
  length: number
}
