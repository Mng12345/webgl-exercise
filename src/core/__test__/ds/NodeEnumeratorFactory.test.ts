// 为NodeEnumeratorFactory编写测试用例
import { beforeEach, describe, expect, it } from 'vitest'
import { NodeEnumeratorFactory } from '../../ds/NodeEnumeratorFactory'
import { TreeNode } from '../../ds/TreeNode'

describe('NodeEnumeratorFactory', () => {
  let root: TreeNode<undefined>
  beforeEach(() => {
    root = new TreeNode(undefined, undefined, 'root')
    const node1 = new TreeNode(undefined, root, 'node1')
    const node2 = new TreeNode(undefined, node1, 'node2')
    const node3 = new TreeNode(undefined, node2, 'node3')
    const node4 = new TreeNode(undefined, node3, 'node4')
    const node5 = new TreeNode(undefined, node4, 'node5')
    const node6 = new TreeNode(undefined, node5, 'node6')
    const node7 = new TreeNode(undefined, node6, 'node7')
    const node8 = new TreeNode(undefined, node7, 'node8')
    const node9 = new TreeNode(undefined, node7, 'node9')
  })

  it('createDFL2RT2BIter', () => {
    const iter = NodeEnumeratorFactory.createDFL2RT2BIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'root',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
    ])
  })

  it('createDFR2LT2BIter', () => {
    const iter = NodeEnumeratorFactory.createDFR2LT2BIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'root',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node9',
      'node8',
    ])
  })

  it('createDFL2RB2TIter', () => {
    const iter = NodeEnumeratorFactory.createDFL2RB2TIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'node9',
      'node8',
      'node7',
      'node6',
      'node5',
      'node4',
      'node3',
      'node2',
      'node1',
      'root',
    ])
  })

  it('createDFR2LB2TIter', () => {
    const iter = NodeEnumeratorFactory.createDFR2LB2TIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'node8',
      'node9',
      'node7',
      'node6',
      'node5',
      'node4',
      'node3',
      'node2',
      'node1',
      'root',
    ])
  })

  it('createBFL2RT2BIter', () => {
    const iter = NodeEnumeratorFactory.createBFL2RT2BIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'root',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node8',
      'node9',
    ])
  })
  it('createBFR2LT2BIter', () => {
    const iter = NodeEnumeratorFactory.createBFR2LT2BIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'root',
      'node1',
      'node2',
      'node3',
      'node4',
      'node5',
      'node6',
      'node7',
      'node9',
      'node8',
    ])
  })

  it('createBFL2RB2TIter', () => {
    const iter = NodeEnumeratorFactory.createBFL2RB2TIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'node9',
      'node8',
      'node7',
      'node6',
      'node5',
      'node4',
      'node3',
      'node2',
      'node1',
      'root',
    ])
  })

  it('createBFR2LB2TIter', () => {
    const iter = NodeEnumeratorFactory.createBFR2LB2TIter(root)
    const result: string[] = []
    while (iter.moveNext()) {
      if (iter.current !== undefined) {
        result.push(iter.current.name)
      }
    }
    expect(result).to.deep.equal([
      'node8',
      'node9',
      'node7',
      'node6',
      'node5',
      'node4',
      'node3',
      'node2',
      'node1',
      'root',
    ])
  })
})
