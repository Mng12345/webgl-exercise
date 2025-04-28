import { describe, expect, it } from 'vitest'
import { ListNode } from '../../ds/ListNode'

// 为ListNode文件添加测试用例
describe('ListNode', () => {
  it('should create a new ListNode', () => {
    const node = new ListNode(1) // 创建一个新的ListNode
    expect(node.data).toBe(1) // 验证data属性是否为1
    expect(node.next).toBe(null) // 验证next属性是否为null
    expect(node.prev).toBe(null) // 验证prev属性是否为null
  })

  it('should set the next and prev pointers', () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    node1.next = node2
    node2.prev = node1
    expect(node1.next).toBe(node2) // 验证node1的next指针指向node2
    expect(node2.prev).toBe(node1) // 验证node2的prev指针指向node1
  })
})
