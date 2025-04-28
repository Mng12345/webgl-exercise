import { type IEnumerator } from './IEnumerator'
import { indexerL2R, indexerR2L } from './Indexer'
import { NodeB2TEnumerator } from './NodeB2TEnumerator'
import { NodeT2BEnumerator } from './NodeT2BEnumerator'
import { Queue } from './Queue'
import { Stack } from './Stack'
import type { TreeNode } from './TreeNode'

export class NodeEnumeratorFactory {
  /** 创建深度优先遍历的从上到下，左至右的迭代器 */
  static createDFL2RT2BIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeT2BEnumerator(node, indexerR2L, Stack)
  }

  /** 创建深度优先遍历的从上到下，右至左的迭代器 */
  static createDFR2LT2BIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeT2BEnumerator(node, indexerL2R, Stack)
  }

  /** 创建深度优先遍历的从下到上，左至右的迭代器 */
  static createDFL2RB2TIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeB2TEnumerator(NodeEnumeratorFactory.createDFL2RT2BIter(node))
  }

  /** 创建深度优先遍历的从下到上，右至左的迭代器 */
  static createDFR2LB2TIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeB2TEnumerator(NodeEnumeratorFactory.createDFR2LT2BIter(node))
  }

  /** 创建广度优先遍历的从上到下，左至右的迭代器 */
  static createBFL2RT2BIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeT2BEnumerator(node, indexerL2R, Queue)
  }

  /** 创建广度优先遍历的从上到下，右至左的迭代器 */
  static createBFR2LT2BIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeT2BEnumerator(node, indexerR2L, Queue)
  }

  /** 创建广度优先遍历的从下到上，左至右的迭代器 */
  static createBFL2RB2TIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeB2TEnumerator(NodeEnumeratorFactory.createBFL2RT2BIter(node))
  }

  /** 创建广度优先遍历的从下到上，右至左的迭代器 */
  static createBFR2LB2TIter<T>(node: TreeNode<T>): IEnumerator<TreeNode<T>> {
    return new NodeB2TEnumerator(NodeEnumeratorFactory.createBFR2LT2BIter(node))
  }
}
