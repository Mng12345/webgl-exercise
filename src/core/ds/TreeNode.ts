import { indexerL2R } from './Indexer'

export class TreeNode<T> {
  private _parent: TreeNode<T> | undefined
  private _children: Array<TreeNode<T>> | undefined
  public name: string
  public data: T | undefined

  public constructor(data: T | undefined, parent: TreeNode<T> | undefined, name: string = '') {
    this.name = name
    this.data = data
    this._parent = parent
    if (this._parent !== undefined) {
      this._parent.addChild(this)
    }
  }

  public isDescendantOf(ancestor: TreeNode<T> | undefined): boolean {
    if (ancestor === undefined) {
      return false
    }
    for (let node = this._parent; node !== undefined; node = node._parent) {
      if (node === ancestor) {
        return true
      }
    }
    return false
  }

  public removeChildAt(index: number): TreeNode<T> | undefined {
    if (this._children === undefined) {
      return undefined
    }
    if (index < 0 || index >= this._children.length) {
      return undefined
    }
    const child = this._children.splice(index, 1)[0]
    child._parent = undefined
    return child
  }

  public getChildAt(index: number): TreeNode<T> | undefined {
    if (this._children === undefined) {
      return undefined
    }
    if (index < 0 || index >= this._children.length) {
      return undefined
    }
    return this._children[index]
  }

  public removeChild(child: TreeNode<T> | undefined): TreeNode<T> | undefined {
    if (child === undefined) {
      return undefined
    }
    if (this._children === undefined) {
      return undefined
    }
    let index: number | undefined
    for (let i = 0; i < this._children.length; i++) {
      if (this._children[i] === child) {
        index = i
        break
      }
    }
    if (index === undefined) {
      return undefined
    }
    return this.removeChildAt(index)
  }

  /** remove this node from its parent */
  public remove(): TreeNode<T> | undefined {
    if (this._parent === undefined) {
      return this
    }
    return this._parent.removeChild(this)
  }

  public addChildAt(child: TreeNode<T>, index: number): TreeNode<T> | undefined {
    if (this.isDescendantOf(child)) {
      return undefined
    }
    if (this._children === undefined) {
      this._children = []
    }
    if (index >= 0 && index <= this._children.length) {
      if (child._parent !== undefined) {
        child._parent.removeChild(child)
      }
      child._parent = this
      this._children.splice(index, 0, child)
      return child
    } else {
      return undefined
    }
  }

  public addChild(child: TreeNode<T>): TreeNode<T> | undefined {
    if (this._children === undefined) {
      this._children = []
    }
    return this.addChildAt(child, this._children.length)
  }

  public get parent(): TreeNode<T> | undefined {
    return this._parent
  }

  public get childCount(): number {
    return this._children?.length || 0
  }

  public hasChild(): boolean {
    return this._children !== undefined && this._children.length > 0
  }

  public get root(): TreeNode<T> {
    let curr: TreeNode<T> = this
    while (curr._parent !== undefined) {
      curr = curr._parent
    }
    return curr
  }

  public get depth(): number {
    let depth = 0
    let curr: TreeNode<T> = this
    while (curr._parent !== undefined) {
      curr = curr._parent
      depth++
    }
    return depth
  }

  public visit(
    preOrderFunc: ((node: TreeNode<T>) => void) | undefined,
    postOrderFunc: ((node: TreeNode<T>) => void) | undefined,
    indexFunc = indexerL2R,
  ): void {
    if (preOrderFunc !== undefined) {
      preOrderFunc(this)
    }
    const arr = this._children ?? []
    for (let i = 0; i < arr.length; i++) {
      const idx = indexFunc(arr.length, i)
      const child = this.getChildAt(idx)
      if (child !== undefined) {
        child.visit(preOrderFunc, postOrderFunc, indexFunc)
      }
    }
    if (postOrderFunc !== undefined) {
      postOrderFunc(this)
    }
  }
}
