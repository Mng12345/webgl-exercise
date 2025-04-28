import type { IEnumerator } from './IEnumerator'
import type { TreeNode } from './TreeNode'

export class NodeB2TEnumerator<T> implements IEnumerator<TreeNode<T>> {
  private _iter: IEnumerator<TreeNode<T>>
  private _arr: TreeNode<T>[]
  private _aryIdx: number
  public constructor(iter: IEnumerator<TreeNode<T>>) {
    this._iter = iter
    this._arr = []
    this._aryIdx = 0
    this.reset()
  }

  reset(): void {
    this._arr = []
    while (this._iter.moveNext()) {
      if (this._iter.current !== undefined) {
        this._arr.push(this._iter.current)
      }
    }
    this._aryIdx = this._arr.length
  }

  moveNext(): boolean {
    this._aryIdx--
    return this._aryIdx >= 0 && this._aryIdx < this._arr.length
  }

  get current(): TreeNode<T> | undefined {
    if (this._aryIdx >= 0 && this._aryIdx < this._arr.length) {
      return this._arr[this._aryIdx]
    } else {
      return undefined
    }
  }
}
