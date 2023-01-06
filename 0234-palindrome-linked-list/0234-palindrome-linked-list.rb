# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}

def is_palindrome(head)
    # head is in singly linked list node format not integer
    # extract head.val from node and add into new array of data
    # head.next for next node access

    data = []

    while head != nil
        data << head.val
        head = head.next
    end
    
    return data == data.reverse
    
    
end

