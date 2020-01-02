# Good morning!

# This problem was asked by Google.
# Determine whether a doubly linked list is a palindrome. What if it’s singly linked?
# For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.


class LinkedListNode
    attr_accessor :data
    attr_accessor :next
    attr_accessor :previous

    def initialize(data)
        @data = data
        @next = nil
        @previous = nil
    end
end

# Example 1
head = LinkedListNode.new(1)
four = LinkedListNode.new(4)
three = LinkedListNode.new(3)
four_again = LinkedListNode.new(4)
one_again = LinkedListNode.new(1)

head.next = four
head.next.next = three
head.next.next.next = four_again
head.next.next.next.next = one_again

one_again.previous = four_again
one_again.previous.previous = three
one_again.previous.previous.previous = four
one_again.previous.previous.previous.previous = head


# Example 2

uno = LinkedListNode.new(1)
quatro = LinkedListNode.new(4)
uno.next = quatro
quatro.previous = uno

# not as effecient as it could be, I go through all the items rather than only half
def palindrome?(first_node)
    # how do I get to the last node? RECURSION
    # I need to automate this further though
    current = first_node
    index = 0
    loop do 
        if current.data != matching_node(current, index).data
            return false
        end
        if !current.next
            break
        end
        current = current.next
        index += 1
    end
    true
end


def last_node(node)
    if node.next
        return last_node(node.next)
    else 
        return node
    end
end

# instead of last node, I want to find the potentially matching node in the set
# that's quite difficult to do without having access to the total length
# of the data structure, but I think I can still do it with recursion
# this would be a lot easier with indexs in an array... but hey, I guess that's the challenge

def matching_node(node, node_index = 0)
     if node.next
        return matching_node(node.next, node_index)
    else 
        return previous_node(node, node_index)
    end
end

def previous_node(node, number)
    current = node
    number.times do
        current = current.previous
    end
    current
end


p palindrome?(uno)

p palindrome?(head)

# p matching_node(four, 1).next