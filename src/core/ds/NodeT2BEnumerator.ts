import type { IAdapter } from './IAdapter'
import type { IEnumerator } from './IEnumerator'
import type { Indexer } from './Indexer'
import type { TreeNode } from './TreeNode'

export class NodeT2BEnumerator<T, IdxFunc extends Indexer, Adapter extends IAdapter<TreeNode<T>>>
  implements IEnumerator<TreeNode<T>>
{
  private _node: TreeNode<T>
  private _adapter: Adapter
  private _currNode: TreeNode<T> | undefined
  private _indexer: IdxFunc
  public constructor(node: TreeNode<T>, func: IdxFunc, adapter: new () => Adapter) {
    this._node = node
    this._indexer = func
    this._adapter = new adapter()
    this._adapter.add(node)
  }
  reset(): void {
    this._currNode = undefined
    this._adapter.clear()
    this._adapter.add(this._node)
  }
  moveNext(): boolean {
    if (this._adapter.isEmpty) {
      return false
    }
    this._currNode = this._adapter.remove()
    if (this._currNode !== undefined) {
      const childCount = this._currNode.childCount
      for (let i = 0; i < childCount; i++) {
        const idx = this._indexer(childCount, i)
        const child = this._currNode.getChildAt(idx)
        if (child !== undefined) {
          this._adapter.add(child)
        }
      }
    }
    return true
  }
  get current(): TreeNode<T> | undefined {
    return this._currNode
  }
}
